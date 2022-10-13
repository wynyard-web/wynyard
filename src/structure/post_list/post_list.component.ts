import { Component, OnInit } from '@angular/core';
import { PostTasksService } from 'src/Services/post-tasks.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import * as firebase from 'firebase/compat';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

@Component({
  selector: 'app-post_list',
  templateUrl: './post_list.component.html',
  styleUrls: ['./post_list.component.css']
})
export class Post_listComponent implements OnInit {

  constructor(private post_service:PostTasksService) { }
  
  ngOnInit() {
    this.get_all_posts()
    // let all_posts_data:any = []
    // all_posts_data = this.post_service.get_all_posts()
    // console.log(all_posts_data)
    
    // this.all_post_url_List = []
    // this.all_post_url_List = this.post_service.post_url_list
  }

  
  // all_post_url_List:[] = []
  // typeOfFile() {
  //   for (let url in this.post_service.post_url_list) {
  //     console.log(url)
  //   }
  // }

  metadata:any = []

  async get_all_posts() {
    const fbapp = firebase.initializeApp(environment.firebase)
    const fb_db = firebase.firestore()
    
  let metadata_ref = fb_db.collection("posts_metadata");
  let snapshot = await metadata_ref.get();
  snapshot.forEach(doc => {
    this.metadata.push(doc.data())
    console.log(doc.id,"=>",doc.data());
  });
  //console.log(this.metadata[0].url)
  //return metadata

  }



}


