import { UserDataService } from 'src/Services/user-data.service';
import { ConfirmDialogComponent } from './../../structure/ConfirmDialog/ConfirmDialog.component';
import { environment } from '../../environments/environment';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue, remove, get } from 'firebase/database'
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-oneone',
  templateUrl: './one-one-chat.component.html',
  styleUrls: ['./one-one-chat.component.css']
})
export class OneOneChatComponent implements OnInit {

  @Input() username: any = "";
  @Input() keymail: any = "";
  @ViewChild('chat')
  chat_line!: ElementRef;

  constructor(public dialog: MatDialog,
    private userdataserv: UserDataService
  ) { }

  x: any = [];
  all_chats: any = [];
  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);

  userlist: any = [];

  message_key = ""

  ngOnInit(): void {

    this.keymail = this.keymail.replace(".", "");
    this.userlist = this.userdataserv.get_all_users(this.keymail)
  }



  fetch_chats(km: string) {
    let keymail = this.keymail
    let keymail2 = km.replace(".", "")

    let Message_Key = [keymail, keymail2].sort().join("_")

    this.message_key = Message_Key

    const starCountRef = ref(this.database, '/OneToOne/' + Message_Key);
    onValue(starCountRef, (snapshot) => {
      this.x = []
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        data.key = childSnapshot.key
        this.x.push(data)
      })
    });

    console.log(this.x)
  }


  add_to_chat(chat: string) {

    this.all_chats.push(chat);
    let postref = ref(this.database, '/OneToOne/' + this.message_key);
    let newpostref = push(postref);

    if (chat == '') {
      alert("Trying to send empty text!")
    }
    else {
      set(
        newpostref, {
        "username": this.username,
        "chat": chat
      }

      )

      this.chat_line.nativeElement.value = '';
      const starCountRef = ref(this.database, '/OneToOne/' + this.message_key);
      onValue(starCountRef, (snapshot) => {
        this.x = []
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val()
          this.x.push(data)
          data.key = childSnapshot.key
        })
      });
    }
  }

  delete_chat(key: any) {
    const dialogref = this.dialog.open(ConfirmDialogComponent, { width: '250px' });

    dialogref.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        const delete_ref = ref(this.database, '/OneToOne/' + this.message_key + "/" + key + "/");
        remove(delete_ref);
        const starCountRef = ref(this.database, '/OneToOne/' + this.message_key);
        onValue(starCountRef, (snapshot) => {
          this.x = []
          snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val()
            this.x.push(data)
            data.key = childSnapshot.key
          })
        });
      }

    })
  }


  ngOnChanges() {
    const starCountRef = ref(this.database, '/OneToOne/' + this.message_key);
    onValue(starCountRef, (snapshot) => {
      this.x = []
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
        data.key = childSnapshot.key
      })
    });
  }


}
