import { Component, Input, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-post_grid',
  templateUrl: './post_grid.component.html',
  styleUrls: ['./post_grid.component.css']
})
export class Post_gridComponent implements OnInit {

  constructor() { }

  @Input() keymail:any;
  ngOnInit()
  {
    this.user_posts()
  }


  fb_db = firebase.firestore()

  post_list:any;
  async user_posts() {

    // const fb_db = firebase.firestore()
    // const keymail = this.user_data_service.email.replaceAll(".","")
    this.post_list = []
  let post_list_ref = this.fb_db.collection("posts_metadata");
  let snapshot = await post_list_ref.get();
  snapshot.forEach(doc => {
    if (doc.data()['keymail'] == this.keymail) {
      this.post_list.push(doc.data())
      //console.log(doc.id,"=>",doc.data());
    }

  });
  }
}
