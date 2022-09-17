import { StructureModule } from './../structure/structure.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    StructureModule

  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
