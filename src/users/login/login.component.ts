import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


constructor (private Router:Router)
{

}

take_me_to_chats(username:string)
{
  this.Router.navigate(["/home"],{ queryParams: { user: username } })
}
}
