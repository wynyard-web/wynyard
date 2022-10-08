import { Injectable } from '@angular/core';
import { Post_Metadata } from 'src/Classes/post-metadata';
import { UserDataService } from './user-data.service';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, StorageReference } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostTasksService {

  constructor(private userdata:UserDataService) { }

  app = initializeApp(environment.firebase)  

  firebase_storage = getStorage(this.app)

  post_url_list:any = []

  

  save_metadata_of_post(current_post_data:Post_Metadata) {
    // const post_metadata = {
    //   size : current_post_data.size,
    //   name: current_post_data.name,
    //   keymail:this.keymail,


    // }
  }

  

  Upload_post(current_post_data:Post_Metadata) {
    
    const keymail = this.userdata.Useremail.replace(".", "")
    console.log(keymail)
    const path = 'posts/' + keymail + "/" + current_post_data.name 
    console.log(path)
    const firebase_storageRef = ref(this.firebase_storage, path)
    
    const uploadTask = uploadBytesResumable(firebase_storageRef, current_post_data.post);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
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
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      current_post_data.post_url = downloadURL
      console.log('File available at', downloadURL);
    });
  }
);
  }

  delete_post() {}

  get_user_post() {}

  get_all_posts() {
    // Create a reference under which you want to list
    const post_listRef = ref(this.firebase_storage, 'posts/')
    console.log("post_listRef:" + post_listRef)
// const post_listRef = ref(this.firebase_storage, 'posts/harshitakansara99@gmailcom/dragon.jpeg');
//     getDownloadURL(post_listRef).then((url)=>{
//       console.log(url)
//     })
    let post_ref:StorageReference
// Find all the prefixes and items.
  listAll(post_listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      post_ref = ref(post_listRef, folderRef.name)         
     
      listAll(post_ref).then((res)=> {
          res.items.forEach((post) =>{          
          console.log("post:", post.fullPath)
          getDownloadURL(post).then((url)=>{
            this.post_url_list.push(url)
            console.log("url: ", url)
          })
          })
      }).catch((error)=>{
        console.log("error in post_ref: ", error)
      });
      
           
      
    });

    
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log("error occured in service while loading posts")
  });

  

  }

}
