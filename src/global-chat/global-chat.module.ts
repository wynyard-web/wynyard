import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports:
  [
    ChatComponent,
  ]
})
export class GlobalChatModule { }
