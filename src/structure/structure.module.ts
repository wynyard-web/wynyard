import { PostsModule } from 'src/posts/posts.module';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './ConfirmDialog/ConfirmDialog.component';
import { GlobalChatModule } from './../global-chat/global-chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Post_gridComponent } from './post_grid/post_grid.component';
import { Post_listComponent } from './post_list/post_list.component';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Post_gridComponent,
    Post_listComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalChatModule,
    MatIconModule,
    GlobalChatModule,
    MatCardModule,
    PostsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Post_gridComponent,
    Post_listComponent,
    ConfirmDialogComponent
  ]
})
export class StructureModule { }
