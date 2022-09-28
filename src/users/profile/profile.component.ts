import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../EditProfileDialog/EditProfileDialog.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  showFiller = false;


  openDialog(): void {
    this.dialog.open(EditProfileDialogComponent, {
      width: '250px'
      
    });
  }


}

