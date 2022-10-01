import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { getDatabase, ref, onValue } from 'firebase/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  uname = "";
  
  app = initializeApp(environment.firebase)
  realdb = getDatabase(this.app)

  auth = getAuth(this.app)

  // provider = new GoogleAuthProvider();
  
  async signIn(loginEmail:any, loginPass:any) {            
    const userCredential = await signInWithEmailAndPassword(this.auth, loginEmail, loginPass)
    .then((userCredential) => {
      //const user = userCredential.user;
      console.log(userCredential.user)
      console.log("LogedIn")
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


// take_me_to_chats(username:string)
// {
//   this.Router.navigate(["/home"],{ queryParams: { user: username } })
// }




}
