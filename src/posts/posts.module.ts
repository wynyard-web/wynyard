import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { AddPostComponent } from './add-post/add-post.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PostCardComponent,
    PostThumbnailComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AddPostComponent
  ]
  
})
export class PostsModule { }
