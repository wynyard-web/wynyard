import { UserDataService } from 'src/Services/user-data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-EditProfileDialog',
  templateUrl: './EditProfileDialog.component.html',
  styleUrls: ['./EditProfileDialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditProfileDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private udserv:UserDataService) {}

  userdata:any;

  ngOnInit() {
    this.userdata = this.data
  }

  app = initializeApp(environment.firebase)

  edit_user_details(fullName:any, username:any, bio:any){

    this.userdata.name = fullName;
    this.userdata.username = username;
    this.userdata.bio = bio;

    this.udserv.set_after_edit(this.userdata.email,this.udserv.username,this.userdata)

  }



}
