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
  realdb = getDatabase()

  auth = getAuth(this.app)

  // provider = new GoogleAuthProvider();
  
  async signIn(loginEmail:any, loginPass:any) {
    const email = loginEmail
    const pass = loginPass 
    
    this.fetchUsername(email)
    
    const userCredential = await signInWithEmailAndPassword(this.auth, email, pass)
    .then((userCredential) => {

      //const user = userCredential.user;
      console.log(userCredential.user)
      console.log("LogedIn")
      this.router.navigate(["/home"],{ queryParams: { user: this.uname } })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("There was some error logging in!")
    });

    
   
  }

  actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  
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

fetchUsername(em : string) {
  const realdb = getDatabase()
  const realRef = ref(realdb, '/users');
    onValue(realRef, (snapshot) => {      
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        if (data.email == em) {
        this.uname = data.username
        console.log(this.uname)
        
        }
        
      })
      
    });
}


}
