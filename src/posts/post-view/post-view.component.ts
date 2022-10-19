import { Router } from '@angular/router';
import { ProfilePostsService } from './../../Services/profile-posts.service';
import { PostTasksService } from 'src/Services/post-tasks.service';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private postserv:PostTasksService, private postprofserv:ProfilePostsService, private router:Router) { }

  post_details:any;

  ngOnInit(): void
  {
    this.post_details = this.postprofserv.post_details
  }

  ondel(keymail:string,name:string)
  {
    if(confirm("You Sure ? ").valueOf())
    {
      this.postserv.delete_post(keymail,name)
    }
  }
}
