import { UserDataService } from 'src/Services/user-data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { PostTasksService } from 'src/Services/post-tasks.service';


@Component({
  selector: 'app-EditProfileDialog',
  templateUrl: './EditProfileDialog.component.html',
  styleUrls: ['./EditProfileDialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private udserv:UserDataService,
    private postTask:PostTasksService
    ) {}

  userdata:any;
  profile_pic:any
  profile_pic_url:any = "/assets/images/prj_logo_colour.png"

  ngOnInit() {
    this.userdata = this.data
  }

  onSelectFile(event:any) {
    const file = event.target.files[0]
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.profile_pic_url = event.target!.result
      }

      this.profile_pic = file
      
      
    }
  }

  
  app = initializeApp(environment.firebase)

  edit_user_details(fullName:any, username:any, bio:any){

    this.postTask.save_profile_pic(this.profile_pic)
    
    this.userdata.name = fullName;
    this.userdata.username = username;
    this.userdata.bio = bio;
    
    
    this.udserv.set_after_edit(this.userdata.email,this.udserv.username,this.userdata)

    
  }



}
