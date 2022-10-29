import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set, onValue, push } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';


import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // UserData: any;

  email: any = "";
  name!: any;
  username!: any;

  userdata:any;
  updatedData:any

  constructor(private router:Router) { }

  // set_logout()
  // {
  //   this.Useremail = "";
  //   this.UserData = {"username":"","email":"","name":""};
  // }



  app = initializeApp(environment.firebase)

  fbapp = firebase.initializeApp(environment.firebase)
  fb_db = firebase.firestore()

  fetch_userdata_with_keymail(keymail: any) {
    const db = getDatabase(this.app)
    let userRef = ref(db, '/users/' + keymail);
    let data: any
    get(userRef).then((user_detail)=>{
      if(user_detail.exists()) {
         data = user_detail.val()
         this.updatedData = ""
        console.log("data:", data)
        this.updatedData = user_detail.val()
        console.log("updated Data:", this.updatedData)
        this.email = data.email
        this.name = data.name
        this.username = data.username
        if (!("bio" in data))
          data.bio=""
        this.userdata = data
      }
    })

    return this.userdata
  }

  set_after_edit(useremail:string,username:string,new_data:any)
  {
    let keymail = useremail.replace(".","")
    let db = getDatabase(this.app)
    let userref = ref(db,'/users/'+keymail);
    set(userref,new_data).then(() => {
      // Data saved successfully!
      console.log("Data updated in realtime database")
    })
    .catch((error) => {
      // The write failed...
      console.log("There was some error while adding user data in realtime database")
    });
    if(username!=new_data.username)
        {
          this.modify_chats(username,new_data.username);
          this.modify_ontoone_chats(username,new_data.username);
          this.modify_posts(username,new_data.username);
          this.modify_comments(username,new_data.username);
        }
    else
        console.log("Username not changed")
    this.updatedData = ''    
    this.fetch_userdata_with_keymail(keymail)   
     
  }


  modify_chats(old_username:string,new_username:string)
  {
    let changeusernamekeys:any=[]

    let db = getDatabase(this.app)
    let allchatref = ref(db,'Chats/')
    onValue(allchatref, (snapshot) => {

      snapshot.forEach((childSnapshot) => {
        if(childSnapshot.val().username==old_username)
          changeusernamekeys.push({
            key:childSnapshot.key,
            username:new_username,
            chat:childSnapshot.val().chat
          })
      })
    });

  changeusernamekeys.forEach((chat:any) => {
    let newchatref = ref(db,'Chats/'+chat.key)
    set(newchatref,{
      username:chat.username,
      chat:chat.chat
    })
  });
  }

  modify_ontoone_chats(old_username:string,new_username:string)
  {
    let db = getDatabase(this.app)
    let allchatref = ref(db,'OneToOne/')
    onValue(allchatref, (snapshot) => {

      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((grandchild)=>{
            if(grandchild.val().username==old_username)
            {
              let changeref = ref(db,'OneToOne/'+childSnapshot.key+"/"+grandchild.key)
              set(changeref,{
                username:new_username,
                chat:grandchild.val().chat
              })
            }
        })
      })
    });

  }

  modify_comments(old_username:string,new_username:string)
  {
    try {
      let db = getDatabase(this.app)
      let allcommentref = ref(db,"post_comments/")    
      onValue(allcommentref,(keymail_user)=>{
        keymail_user.forEach((post_name)=>{
          post_name.forEach((comment)=>{
            comment.forEach((comm)=>{            
              if(comm.val().username==old_username)
              {            
                let changeref = ref (db,keymail_user.key+"/"+post_name.key+"/"+comment.key + "/" + comm.key + "/")             
                set(changeref,{
                  username:new_username,
                  comment:comm.val().comment,
                  keymail:comm.val().keymail,             
                })              
              }
            })
            
            
          })
        })
      })
    } catch(e) {
      console.log(e)
    }
    
  }

  async modify_posts(old_username:string,new_username:string)
  {
    let metadata_collection =await this.fb_db.collection("posts_metadata").where('username','==',old_username).get()
    metadata_collection.forEach(ele=>{
      let newuserref = this.fb_db.collection("posts_metadata").doc(ele.id)
      newuserref.update({username:new_username})
    })

  }

  userlist:any = []
  get_all_users(keymail:string)
  {
    this.userlist=[]
    let db = getDatabase(this.app)

    let userref = ref(db,'/users')
    get(userref).then(
      (users)=>
      {
        users.forEach((user:any)=>
        {
          if(user.key != keymail)
            this.userlist.push(user.val())
        }
        )
      }
    )

    return this.userlist;
  }
}
