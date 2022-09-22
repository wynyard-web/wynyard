import { ProfileComponent } from './../users/profile/profile.component';
import { HomeComponent } from './../structure/home/home.component';
import { ChatComponent } from './../global-chat/chat/chat.component';
import { LoginComponent } from './../users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/users/register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
