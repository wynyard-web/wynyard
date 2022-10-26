import { UserDataService } from 'src/Services/user-data.service';
import { ConfirmDialogComponent } from './../../structure/ConfirmDialog/ConfirmDialog.component';
import { environment } from '../../environments/environment';
import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set,push, onValue, remove, get} from 'firebase/database'
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-oneone',
  templateUrl: './one-one-chat.component.html',
  styleUrls: ['./one-one-chat.component.css']
})
export class OneOneChatComponent implements OnInit {

  @Input() username:any = "";
  @Input() keymail:any = "";
  @ViewChild('chat')
  chat_line!: ElementRef;

  constructor(public dialog: MatDialog,
              private userdataserv:UserDataService
    ) { }

  x:any = [];
  all_chats:any = [];
  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);

  userlist:any = [];

  ngOnInit(): void {

    this.keymail = this.keymail.replace(".","");

    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        data.key = childSnapshot.key
        this.x.push(data)
      })
    });


    this.userlist = this.userdataserv.get_all_users(this.keymail)
  }


  sayhey(km:string)
  {

  }




  add_to_chat(chat:string)
  {

    this.all_chats.push(chat);
    let postref = ref(this.database,"Chats/");
    let newpostref = push(postref);

    if (chat=='')
    {
      alert("Trying to send empty text!")
    }
    else
    {
    set(
      newpostref,{
        "username":this.username,
        "chat":chat
      }

    )

    this.chat_line.nativeElement.value='';
    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
        data.key = childSnapshot.key
      })
    });
  }
  }

  delete_chat(key:any)
  {
    const dialogref = this.dialog.open(ConfirmDialogComponent,{ width:'250px'});

    dialogref.afterClosed().subscribe(confirmation=>{
                                                      if(confirmation)
                                                        {
                                                          const delete_ref = ref(this.database,"/Chats/"+key+"/");
                                                          remove(delete_ref);
                                                        }

                                                    })
  }


  ngOnChanges()
  {
    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
        data.key = childSnapshot.key
      })
    });
  }


}
