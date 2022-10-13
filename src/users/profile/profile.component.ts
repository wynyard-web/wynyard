import { UserDataService } from './../../Services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProfileDialogComponent } from '../EditProfileDialog/EditProfileDialog.component';
import { getDatabase, ref, onValue, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(public dialog: MatDialog, 
    private router: Router, 
    private user_data_fetch:UserDataService,
    private location:Location) {}


  fullName:any;
  userName:any;

  ngOnInit() {
    this.fullName = this.user_data_fetch.name;
    this.userName = this.user_data_fetch.username;
  }

  showFiller = false;

  //app = initializeApp(environment.firebase)

  // childKey:any



  openDialog(): void {
    this.dialog.open(EditProfileDialogComponent, {
      width: '250px'

    });
  }

  go_to_Add_Post() {
    this.router.navigate(['/add-post'])
  }


  go_back() {
    // this.router.navigate(['/profile'])
    this.location.back()
  }



}

