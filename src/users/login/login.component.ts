import { UserDataService } from './../../Services/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import { environment } from 'src/environments/environment';
import { getDatabase, ref, get } from 'firebase/database';
import { getStorage, getDownloadURL } from "firebase/storage";
import {ref as frref} from "firebase/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  constructor(private router: Router, private user_data_service:UserDataService) { }

  ngOnInit(): void {
  }

  uname = "";

  app = initializeApp(environment.firebase)
  realdb = getDatabase(this.app)

  auth = getAuth(this.app)

  // provider = new GoogleAuthProvider();

  user_details:any;
  bg_url = ""


  async signIn(loginEmail:any, loginPass:any) {
    const userCredential = await signInWithEmailAndPassword(this.auth, loginEmail, loginPass)
    .then((userCredential) => {
      //const user = userCredential.user;
      console.log(userCredential.user)
      console.log("LogedIn")
      this.user_data_service.email = loginEmail;
      this.router.navigate(["/home"],{ queryParams: { email:loginEmail } })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Username or Password incorrect")
      console.log("There was some error logging in!")
    });

  }


   async forgotPass() {
    let fpemail: any
    console.log("forgot password method called")
    fpemail = prompt("Enter your email:");
    console.log("password reset email:", fpemail)
    sendPasswordResetEmail(this.auth, fpemail)
  .then(() => {
    // Password reset email sent!
    console.log("password reset email2:", fpemail)
    alert("Check your email for a reset password link.")
    // this.router.navigate(['sign-in'])
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }

  go_to_register() {
    this.router.navigate(['/register'])
    console.log("Entered Registration Page")
  }

  fetch_background() {
    const firebase_storage = getStorage()

    getDownloadURL(frref(firebase_storage, "assets/login_background.jpg"))
  .then((url) => {
    //console.log(url)
    this.bg_url = url
    //console.log(this.profile_pic_url)

  })
  .catch((error) => {
    // Handle any errors
    //this.profile_pic_url = "/assets/wynyard/images/prj_logo_black.png"
    console.log("Error while fetching background:", error)
   
  });
  }


// take_me_to_chats(username:string)
// {
//   this.Router.navigate(["/home"],{ queryParams: { user: username } })
// }

}
