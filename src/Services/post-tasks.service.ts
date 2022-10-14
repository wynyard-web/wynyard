import { getDatabase } from 'firebase/database';
import { Injectable } from '@angular/core';
import { Post_Metadata } from 'src/Classes/post-metadata';
import { UserDataService } from './user-data.service';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, StorageReference } from "firebase/storage";
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
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }


  progress:number=0;

   Upload_post(current_post_data:Post_Metadata) {

    const keymail = this.userdata.email.replace(".", "")
    console.log(keymail)
    const path = 'posts/' + keymail + "/" + current_post_data.name
    console.log(path)
    const firebase_storageRef = ref(this.firebase_storage, path)

    const uploadTask = uploadBytesResumable(firebase_storageRef, current_post_data.post);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    this.emitChange(this.progress);
    console.log('Upload is ' + this.progress + '% done');
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
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        alert("You are not an authorized user")
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        alert("The upload was cancled")
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        alert("Storage Unknown")
        break;
    }
  },
  () => {
    // Upload completed successfully, now we can get the download URL
    alert("Post Uploaded successfully")
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

  delete_post() {}

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



}
