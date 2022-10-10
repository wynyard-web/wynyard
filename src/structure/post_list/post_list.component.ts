import { Component, OnInit } from '@angular/core';
import { PostTasksService } from 'src/Services/post-tasks.service';

@Component({
  selector: 'app-post_list',
  templateUrl: './post_list.component.html',
  styleUrls: ['./post_list.component.css']
})
export class Post_listComponent implements OnInit {

  constructor(private post_service:PostTasksService) { }

  ngOnInit() {
    this.post_service.get_all_posts()
    this.all_post_url_List = []
    this.all_post_url_List = this.post_service.post_url_list
  }

  
  all_post_url_List:[] = []
  // typeOfFile() {
  //   for (let url in this.post_service.post_url_list) {
  //     console.log(url)
  //   }
  // }



}


