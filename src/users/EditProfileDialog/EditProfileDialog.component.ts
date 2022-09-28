import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-EditProfileDialog',
  templateUrl: './EditProfileDialog.component.html',
  styleUrls: ['./EditProfileDialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProfileDialogComponent>) {}

  ngOnInit() {
  }

}
