import { HomeComponent } from './../structure/home/home.component';
import { ChatComponent } from './../global-chat/chat/chat.component';
import { LoginComponent } from './../users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
