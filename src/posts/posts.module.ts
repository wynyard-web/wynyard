import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';



@NgModule({
  declarations: [
    PostCardComponent,
    PostThumbnailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
