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
  }


  app = initializeApp(environment.firebase)

  auth = getAuth(this.app)

  


  register(fullname:any, uname:any, email:any, password:any) {
    const name = fullname
    const loginuname = uname
    const loginEmail = email
    const loginPass = password

    const database = getDatabase()
    let userRef = ref(database, 'users/')
    let newUser = push(userRef)
    set(newUser, {
      name: name,
      username: loginuname,
      email: loginEmail      
    }).then(() => {
      // Data saved successfully!
      console.log("Data updated in realtime database")
    })
    .catch((error) => {
      // The write failed...
      console.log("There was some error while adding user data in realtime database")
    });


    createUserWithEmailAndPassword(this.auth, loginEmail, loginPass)
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
