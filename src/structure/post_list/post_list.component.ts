import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private post_service:PostTasksService, private router:Router) { }

  ngOnInit() {
    this.all_posts()
  }

  // all_post_url_List:[] = []
  // typeOfFile() {
  //   for (let url in this.post_service.post_url_list) {
  //     console.log(url)
  //   }
  // }

  metadata:any = []

  async all_posts() {
    const fbapp = firebase.initializeApp(environment.firebase)
    const fb_db = firebase.firestore()
    this.metadata = []
  let metadata_ref = fb_db.collection("posts_metadata");
  let snapshot = await metadata_ref.get();
  snapshot.forEach(doc => {
    this.metadata.push(doc.data())
    // console.log(doc.id,"=>",doc.data());
  });

  this.shuffle(this.metadata)
  //console.log(this.metadata[0].url)
  //return metadata

  }


  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


}


