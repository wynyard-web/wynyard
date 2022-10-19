import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { AddPostComponent } from './add-post/add-post.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { PostViewComponent } from './post-view/post-view.component';


@NgModule({
  declarations: [
    PostCardComponent,
    PostThumbnailComponent,
    AddPostComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule
  ],
  exports: [
    AddPostComponent,
    PostCardComponent,
    PostThumbnailComponent
  ]

})
export class PostsModule { }
