import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentsComponent } from './comments/comments.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { PostViewComponent } from './post-view/post-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    PostCardComponent,
    PostThumbnailComponent,
    AddPostComponent,
    PostViewComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [
    AddPostComponent,
    PostCardComponent,
    PostThumbnailComponent,
    CommentsComponent
  ]

})
export class PostsModule { }
