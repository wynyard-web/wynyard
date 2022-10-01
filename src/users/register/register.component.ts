import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getDatabase, ref, set } from 'firebase/database';
import { push } from 'firebase/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("omkarelectric892@gmail.com".replace('.',''))
  }

  app = initializeApp(environment.firebase)

  auth = getAuth(this.app)
  
  register(fullname:any, uname:any, email:any, password:any) {    
    let keymail = email.replace('.','')
    const database = getDatabase()
    let userRef = ref(database, 'users/' + keymail)
    //let newUser = push(userRef)
    set(userRef, {
      name: fullname,
      username: uname,
      email: email      
    }).then(() => {
      // Data saved successfully!
      console.log("Data updated in realtime database")
    })
    .catch((error) => {
      // The write failed...
      console.log("There was some error while adding user data in realtime database")
    });


    createUserWithEmailAndPassword(this.auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    alert("User Registered successfully")    
    this.router.navigate(["/login"])
    
  })  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });

  
    

  
  }

  go_to_login() {
    this.router.navigate(['/login'])
  }

}
