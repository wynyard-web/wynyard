import { Router } from '@angular/router';
import { PostTasksService } from 'src/Services/post-tasks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {

  constructor(private postserv:PostTasksService, private router:Router) { }

  @Input() post_details:any;

  ngOnInit(): void {
  }

  ondel(keymail:string,name:string)
  {
    if(confirm("You Sure ? ").valueOf())
    {
      this.postserv.delete_post(keymail,name)
      this.router.navigateByUrl('/profile',{skipLocationChange:true})
    }
  }

}
