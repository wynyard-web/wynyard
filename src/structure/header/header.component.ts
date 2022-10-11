import { Router } from '@angular/router';
import { UserDataService } from './../../Services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ud:UserDataService, private router:Router) { }

  ngOnInit(): void {

  }

  logout()
  {
    //this.ud.set_logout();
    this.router.navigate(["/home"]);
  }
}
