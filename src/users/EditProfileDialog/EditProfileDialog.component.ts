import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-EditProfileDialog',
  templateUrl: './EditProfileDialog.component.html',
  styleUrls: ['./EditProfileDialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProfileDialogComponent>) {}

  ngOnInit() {
  }

  app = initializeApp(environment.firebase)

  edit_user_details(fullName:any, username:any, bio:any){
    const db = getDatabase(this.app)

    const userRef = ref(db, "/users")

  }

}
