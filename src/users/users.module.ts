import { StructureModule } from './../structure/structure.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileDialogComponent } from './EditProfileDialog/EditProfileDialog.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileDialogComponent
    
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    StructureModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule

  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
