import { UserDataService } from './../../Services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProfileDialogComponent } from '../EditProfileDialog/EditProfileDialog.component';

import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
import { getFirestore, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(public dialog: MatDialog,
    private router: Router,
    private user_data_service:UserDataService,
    private location:Location
    ) {}


  fullName:any;
  userName:any;
  bio:any;

  ngOnInit() {
    this.fullName = this.user_data_service.name;
    this.userName = this.user_data_service.username;
    this.bio = this.user_data_service.fetch_userdata_with_keymail(this.keymail).bio

  }

  showFiller = false;

  //app = initializeApp(environment.firebase)

  // childKey:any

  fbapp = firebase.initializeApp(environment.firebase)

  openDialog(): void {
    this.dialog.open(EditProfileDialogComponent, {
      width: '250px',
      data : this.user_data_service.fetch_userdata_with_keymail(this.keymail)
    });
  }

  go_to_Add_Post() {
    this.router.navigate(['/add-post'])
  }


  go_back() {
    // this.router.navigate(['/profile'])
    this.location.back()
  }
//


  fb_db = firebase.firestore()
  keymail = this.user_data_service.email.replace(".","")

  // metadata:any = []
  // async user_posts() {

  //   // const fb_db = firebase.firestore()
  //   // const keymail = this.user_data_service.email.replace(".","")
  //   this.metadata = []
  // let metadata_ref = this.fb_db.collection("posts_metadata");
  // let snapshot = await metadata_ref.get();
  // snapshot.forEach(doc => {
  //   if (doc.data()['keymail'] == this.keymail) {
  //     this.metadata.push(doc.data())
  //     //console.log(doc.id,"=>",doc.data());
  //   }

  // });
  // }


  // async delete_post(name:any) {
  //   const storage = getStorage();

  //   // Create a reference to the file to delete
  //   const postRef = ref(storage, 'posts/' + this.keymail + '/' + name);

  //   // Delete the file from storage
  //   deleteObject(postRef).then(() => {
  //     // File deleted successfully
  //     alert("post deleted successfully")
  //   }).catch((error) => {
  //   // Uh-oh, an error occurred!
  //   });

  //   // Delete post metadata from firestore
  //   const fb_db = firebase.firestore()
  //   let metadata_ref = this.fb_db.collection("posts_metadata");
  //   let snapshot = await metadata_ref.get();
  //   snapshot.forEach(async doc => {
  //     if (doc.data()['keymail'] == this.keymail && doc.data()['name'] == name) {
  //       //await deleteDoc(doc(fb_db, "posts_metadata", doc.id));
  //       doc.ref.delete()
  //       alert("Metadata deleted successfully")
  //     }

  //   });

  // }


}

