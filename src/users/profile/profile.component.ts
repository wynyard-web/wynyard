import { UserDataService } from './../../Services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProfileDialogComponent } from '../EditProfileDialog/EditProfileDialog.component';
import { getDatabase, ref, onValue, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(public dialog: MatDialog, private router: Router, private user_data_fetch:UserDataService) {}


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


  //db = getDatabase(this.app);


  // fetch_user_data():any {
  //   const keymail = this.email.replace(".","")
  //   let userRef = ref(this.db, '/users/' + keymail);

  //   // onValue() = It is useful if there is a change in the data
  //   // get() = It is used to get just the data from database

  //   get(userRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log("get:",snapshot.val());
  //       const data = snapshot.val();
  //       this.fullName = data.name
  //       this.username = data.username
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });


  // }




}

