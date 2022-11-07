import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';
import { UserDataService } from 'src/Services/user-data.service';
import {getDatabase, ref, set,push, onValue, remove} from 'firebase/database'

import { getStorage, getDownloadURL } from "firebase/storage";
import {ref as frref} from "firebase/storage";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor(private userService:UserDataService,private router:Router) { }

  @Input() post_details:any;

  profile_pic_url = "";

  ngOnInit(): void {
    this.fetchComments()
    this.fetch_profile_pic()
    this.comment_header = this.comments[0].username + this.comments[0].comment
  }

  ngOnChanges(): void {
    this.fetchComments()
  }

  comments:any = []



  app = initializeApp(environment.firebase)
  realtime = getDatabase(this.app)

  comment_header = "Click to open Comments";
  comment_user = ""

  on_close()
  {
    this.comment_user = this.comments[0].username
    this.comment_header = " : " + this.comments[0].comment
  }

  on_open()
  {
    this.comment_user = ""
    this.comment_header = "Comments"
  }


  async addNewComment(comment:any) {

    let post_keymail = this.post_details.keymail
    let post_name = this.post_details.name.replaceAll(".","")
    let keymail = this.userService.email.replaceAll(".","")

    try {
      let PostCommentRef = ref(this.realtime, "post_comments/" + post_keymail + "/" + post_name + "/")
    let newCommentRef = push(PostCommentRef)

    if (comment == "") {
      alert("comment empty!!!!")
    } else {
      set (
        newCommentRef, {
          "keymail":keymail,
          "comment":comment,
          "username":this.userService.username
        }
      )
      alert("Data uploaded in realtime successfully")
    }



      // this.router.navigateByUrl("/")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  fetchComments() {
    let post_keymail = this.post_details.keymail
    let post_name = this.post_details.name.replaceAll(".","")

    const commentRef = ref(this.realtime, '/post_comments/' + post_keymail + "/" + post_name);
    onValue(commentRef, (snapshot) => {
      this.comments=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        data.key = childSnapshot.key
        this.comments.push(data)
      })
    });
  }

  fetch_profile_pic() {
    const firebase_storage = getStorage()

    getDownloadURL(frref(firebase_storage, "profile_pic/" + this.post_details.keymail + "/" + this.post_details.keymail))
  .then((url) => {
    //console.log(url)
    this.profile_pic_url = url
    //console.log(this.profile_pic_url)

  })
  .catch((error) => {
    // Handle any errors
    //this.profile_pic_url = "/assets/wynyard/images/prj_logo_black.png"

    getDownloadURL(frref(firebase_storage, "assets/" + "prj_logo_black.png"))
    .then((url) => {
      //console.log(url)
      this.profile_pic_url = url
      //console.log(this.profile_pic_url)

    }).catch((error) => {
      console.log("Error loading profile pic:", error)
    })
  });
  }

  go_to_prof(keymail:any)
  {
    this.router.navigate(["viewprofile",keymail])
  }

}
