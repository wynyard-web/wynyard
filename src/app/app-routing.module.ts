import { PostViewComponent } from './../posts/post-view/post-view.component';
import { ProfileComponent } from './../users/profile/profile.component';
import { HomeComponent } from './../structure/home/home.component';
import { ChatComponent } from './../global-chat/chat/chat.component';
import { LoginComponent } from './../users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/users/register/register.component';
import { AddPostComponent } from 'src/posts/add-post/add-post.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
  {path:"add-post", component:AddPostComponent},
  {path:"ViewPost",component:PostViewComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
