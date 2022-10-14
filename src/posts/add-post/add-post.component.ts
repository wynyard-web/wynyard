import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { Post_Metadata } from 'src/Classes/post-metadata';
import { PostTasksService } from 'src/Services/post-tasks.service';
import { UserDataService } from 'src/Services/user-data.service';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router,
    private location:Location,
    private post_service:PostTasksService,
    private user_data:UserDataService) { }

  ngOnInit(): void {
  }



  // ! = non-null value assertion
  // ? = optional
  current_post_data!:Post_Metadata
  url:any = 'assets/images/prj_logo_colour.png'
  format:any

  go_to_profile() {
    // this.router.navigate(['/profile'])
    this.location.back()
  }

  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0]
    if (file) {
      this.current_post_data = new Post_Metadata(event.target.files[0])
      this.current_post_data.name = event.target!.files[0].name
      console.log(this.current_post_data.name)

      console.log(file)

      var reader = new FileReader();
      reader.readAsDataURL(file); // read file as data url

      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      this.current_post_data.fileType = this.format
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result


      }

      //this.post_service.Upload_post(this.current_post_data)
      //this.post_service.save_metadata_of_post(this.current_post_data)
    }
  }

  progress:number=0;

  upload_post(caption:any) {
    this.current_post_data.caption = caption
    this.current_post_data.username = this.user_data.username
    //console.log("current_post_data before upload:", this.current_post_data)
    this.post_service.Upload_post(this.current_post_data)
    this.post_service.changeEmitted$.subscribe(data=>this.progress=data)
    //console.log("current_post_data after upload:", this.current_post_data)
    //this.post_service.save_metadata_of_post(this.current_post_data)
    //console.log("current_post_data after updating firestore:", this.current_post_data)
  }


}
