import { UserDataService } from './../../Services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditProfileDialogComponent } from '../EditProfileDialog/EditProfileDialog.component';

import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
import { getFirestore, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getStorage, ref, deleteObject, getDownloadURL } from "firebase/storage";
import { getDatabase, get, set, onValue, push } from 'firebase/database';
import {ref as rtref} from 'firebase/database';
import { PostTasksService } from 'src/Services/post-tasks.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {


  constructor(public dialog: MatDialog,
    private router: Router,
    private user_data_service:UserDataService,
    private location:Location,
    private postTask:PostTasksService,
    private route:ActivatedRoute
    ) {}


  fullName:any;
  userName:any;
  bio:any;
  profile_pic_url:any = ""

  keymail = ""

  ngOnInit() {
    // this.fullName = this.user_data_service.name;
    // this.userName = this.user_data_service.username;
    // this.bio = this.user_data_service.fetch_userdata_with_keymail(this.keymail).bio
    let km = ""
    this.route.params.subscribe((params:Params)=> {this.keymail = params['profile']})

    console.log("Viewww : ",this.keymail)

    this.data_setter()
    this.fetch_profile_pic()

  }

  data_setter()
  {
    let fbdb = getDatabase(this.fbapp)
    let userref = rtref(fbdb,'/users/'+this.keymail)
    let data:any;
    get(userref).then((userdetail)=>{
      data = userdetail.val()
      this.fullName = data.name;
      this.userName = data.username;
      this.bio = data.bio;
    })
  }

  Refresh_profile_data() {
    let data = this.user_data_service.updatedData
    console.log("ProfileData", data)
    this.fullName = data.name
    this.userName = data.username
    this.bio = data.bio
    this.fetch_profile_pic()
  }

  showFiller = false;

  //app = initializeApp(environment.firebase)

  // childKey:any

  fbapp = firebase.initializeApp(environment.firebase)

  openDialog(): void {
    this.dialog.open(EditProfileDialogComponent, {
      width: '40%',
      height: '70%',
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




  fetch_profile_pic() {

    const firebase_storage = getStorage()

    getDownloadURL(ref(firebase_storage, "profile_pic/" + this.keymail + "/" + this.keymail))
  .then((url) => {
    //console.log(url)
    this.profile_pic_url = url
    //console.log(this.profile_pic_url)

  })
  .catch((error) => {
    // Handle any errors
    //console.log("Error while loading profile pic:", error)
    getDownloadURL(ref(firebase_storage, "assets/" + "prj_logo_colour.png"))
  .then((url) => {
    //console.log(url)
    this.profile_pic_url = url
    //console.log(this.profile_pic_url)

  }).catch((error)=> {
    console.log("Error while loading profile pic:", error)
  })
  });
  }




}
