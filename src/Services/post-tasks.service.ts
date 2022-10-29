import { Router } from '@angular/router';
import { getDatabase } from 'firebase/database';
import { Injectable } from '@angular/core';
import { Post_Metadata } from 'src/Classes/post-metadata';
import { UserDataService } from './user-data.service';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, StorageReference, deleteObject } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


import { FetchedPostData } from 'src/Classes/FetchedPostData';
import { MatCardAvatar } from '@angular/material/card';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostTasksService {

  private emitChangeSource = new Subject<number>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  constructor(private userdata:UserDataService,
            private router:Router
    ) { }

    ngOnInit() {

    }

  app = initializeApp(environment.firebase)

  firebase_storage = getStorage(this.app)

  firebase_firestore_db = getFirestore(this.app)

  fbapp = firebase.initializeApp(environment.firebase)
  fb_db = firebase.firestore()

  post_url_list:any = []

  current_post_url:string = ""

  fetched_post_data : FetchedPostData = new FetchedPostData()
    fetched_posts_list:any  = []


  async save_metadata_of_post(current_post_data:Post_Metadata, imageUrl:string) {
    const keymail = this.userdata.email.replace(".", "")
    //console.log(imageUrl)
    try {
      const docRef = await addDoc(collection(this.firebase_firestore_db, "posts_metadata"), {
          caption: current_post_data.caption,
          name: current_post_data.name,
          keymail: keymail,
          fileType:current_post_data.fileType,
          username:current_post_data.username,
          url:imageUrl

      });

      alert("Data uploaded in firestore successfully")
      this.router.navigateByUrl("/")
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }


  progress:number=0;

   Upload_post(current_post_data:Post_Metadata) {

    const keymail = this.userdata.email.replace(".", "")
    const path = 'posts/' + keymail + "/" + current_post_data.name
    const firebase_storageRef = ref(this.firebase_storage, path)
    const uploadTask = uploadBytesResumable(firebase_storageRef, current_post_data.post);

  uploadTask.on('state_changed',
    (snapshot) => {
    this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    this.emitChange(this.progress);
    //console.log('Upload is ' + this.progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    console.log("error occured while uploading the post:", error)


  },
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      this.current_post_url = downloadURL
      console.log(this.current_post_url)
      current_post_data.post_url = downloadURL
      console.log('File available at', downloadURL);
      this.save_metadata_of_post(current_post_data, downloadURL)

    });
  }
);


  }

  async delete_post(keymail:string,name:string)
  {
    const storage = getStorage();

    // Create a reference to the file to delete
    const postRef = ref(storage, 'posts/' + keymail + '/' + name);

    // Delete the file from storage
    deleteObject(postRef).then(() => {
      // File deleted successfully
      alert("post deleted successfully")
    }).catch((error) => {
    // Uh-oh, an error occurred!
    });

    // Delete post metadata from firestore
    const fb_db = firebase.firestore()
    let metadata_ref = this.fb_db.collection("posts_metadata");
    let snapshot = await metadata_ref.get();
    snapshot.forEach(async doc => {
      if (doc.data()['keymail'] == keymail && doc.data()['name'] == name) {
        //await deleteDoc(doc(fb_db, "posts_metadata", doc.id));
        doc.ref.delete()
        alert("Metadata deleted successfully")
        this.router.navigateByUrl('/profile')
      }

    });


  }

  get_user_post() {}

  async get_all_posts() {
//     // Create a reference under which you want to list
//     const post_listRef = ref(this.firebase_storage, 'posts/')
//     console.log("post_listRef:" + post_listRef)

//     let post_ref:StorageReference
// // Find all the prefixes and items.
//     this.fetched_posts_list = []
//     this.post_url_list = []
//   listAll(post_listRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//       post_ref = ref(post_listRef, folderRef.name)
//       this.fetched_post_data.keymail = folderRef.name

//       listAll(post_ref).then((res)=> {
//           res.items.forEach((post) =>{
//           //console.log("post:", post.fullPath)
//           this.fetched_post_data.post_name = post.name
//           // console.log("Post_name:", post.name)
//           getDownloadURL(post).then((url)=>{
//             this.fetched_post_data.post_url = url
//             this.post_url_list.push(url)
//             //console.log("url: ", url)
//           })
//           this.fetched_posts_list.push(this.fetched_post_data)
//           })
//       }).catch((error)=>{
//         console.log("error in post_ref: ", error)
//       });


//     });



//   }).catch((error) => {
//     // Uh-oh, an error occurred!
//     console.log("error occured in service while loading posts")
//   });

  //   let metadata:any = []
  // let metadata_ref = this.fb_db.collection("posts_metadata");
  // let snapshot = await metadata_ref.get();
  // snapshot.forEach(doc => {
  //   metadata.push(doc.data())
  //   console.log(doc.id,"=>",doc.data());
  // });
  // //console.log(metadata[0].url)
  // return metadata

  }

  save_profile_pic(file:File) {
    const keymail = this.userdata.email.replace(".", "")
    const profilepicRef = ref(this.firebase_storage, 'profile_pic/' + keymail + "/" + keymail)

    const uploadTask = uploadBytesResumable(profilepicRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log("Error while uploading the profile pic:", error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }




}
