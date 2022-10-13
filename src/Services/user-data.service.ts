import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { getDatabase, ref, get } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // UserData: any;

  email: any = ""
  name!: any
  username!: any
  


  constructor() { }

  // set_logout()
  // {
  //   this.Useremail = "";
  //   this.UserData = {"username":"","email":"","name":""};
  // }

  app = initializeApp(environment.firebase)

  fetch_userdata_with_keymail(keymail: any) {
    const db = getDatabase(this.app)
    let userRef = ref(db, '/users/' + keymail);
    let data: any
    get(userRef).then((user_detail)=>{
      if(user_detail.exists()) {        
         data = user_detail.val()
        console.log("data:", data)
        this.email = data.email
        this.name = data.name
        this.username = data.username
      }
    })

    return data
  }

}
