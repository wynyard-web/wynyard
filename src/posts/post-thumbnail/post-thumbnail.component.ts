import { ProfilePostsService } from './../../Services/profile-posts.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {

  constructor( private router:Router, private profserv:ProfilePostsService) { }

  @Input() post_details:any;

  ngOnInit(): void {
  }



  sendtoview()
  {

    this.profserv.post_details = this.post_details
    this.router.navigate(['ViewPost'])
  }

}
