import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { OneOneChatComponent } from './one-one-chat/one-one-chat.component';




@NgModule({
  declarations: [
    ChatComponent,
    OneOneChatComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:
  [
    ChatComponent,
    OneOneChatComponent
  ]
})
export class GlobalChatModule { }
