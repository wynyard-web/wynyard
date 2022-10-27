import { Component, OnInit,Input } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc, updateDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { UserDataService } from 'src/Services/user-data.service';
import {getDatabase, ref, set,push, onValue, remove} from 'firebase/database'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor(private userService:UserDataService) { }

  @Input() post_details:any;

  

  ngOnInit(): void {
    this.fetchComments()
  }

  ngOnChanges(): void {
    this.fetchComments()
  }

  comments:any = []

  

  app = initializeApp(environment.firebase)
  realtime = getDatabase(this.app)

  async addNewComment(comment:any) {
    
    let post_keymail = this.post_details.keymail
    let post_name = this.post_details.name.replace(".","")
    let keymail = this.userService.email.replace(".","")
    
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
    let post_name = this.post_details.name.replace(".","")

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

}
