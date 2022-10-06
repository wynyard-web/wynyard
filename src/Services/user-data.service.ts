import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  UserData: any;

  Useremail:string = "";

  constructor() { }

  set_logout()
  {
    this.Useremail = "";
    this.UserData = {"username":"fds","email":"","name":""};
  }

}
