import { environment } from '../../environments/environment';
import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set,push, onValue,onChildAdded} from 'firebase/database'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() username:any = "";
  @ViewChild('chat')
  chat_line!: ElementRef;

  constructor() { }

  x:any = [];
  all_chats:any = [];
  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);


  ngOnInit(): void {
    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
      })
    });
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
      })
    });
  }
  }


  ngOnChanges()
  {
    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
      })
    });
  }


}
