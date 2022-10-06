import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router, private location:Location) { }

  ngOnInit(): void {
  }

  go_to_profile() {
    // this.router.navigate(['/profile'])
    this.location.back()
  }



}
