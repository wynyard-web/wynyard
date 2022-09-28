import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ConfirmDialog',
  templateUrl: './ConfirmDialog.component.html',
  styleUrls: ['./ConfirmDialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
}

onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
}

}
