import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post_list',
  templateUrl: './post_list.component.html',
  styleUrls: ['./post_list.component.css']
})
export class Post_listComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postList = [1, 2, 3, 4, 5, 6]



}
