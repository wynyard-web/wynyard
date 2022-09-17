import { GlobalChatModule } from './../global-chat/global-chat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    GlobalChatModule,
    MatIconModule,
    MatSidenavModule,
    GlobalChatModule
  ],
  exports: [
    HomeComponent
  ]
})
export class StructureModule { }
