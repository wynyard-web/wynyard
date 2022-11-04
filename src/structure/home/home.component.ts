import { UserDataService } from './../../Services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, get } from 'firebase/database';
import { ActivatedRoute, Router} from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private ud:UserDataService) { }

  username:any= this.ud.username
  email:any = ""
  // public w:any;

  logged_in_user:any = {'username':""};


  app = initializeApp(environment.firebase)
  db = getDatabase(this.app)

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.email = params.get("email"));
    // this.fetchUsername(this.email)
    // this.w = window.innerWidth;
    //this.username = this.ud.get_username()

    console.log("user_email:", this.ud.email)
    if(this.ud.email=="")
    {
      console.log("Not Logged In")
    }
    else
    {
      this.fetch_user_details(this.ud.email)
    }
  }

  fetch_user_details(user_email:any)
  {
    let keymail = user_email.replaceAll(".", "");

    this.ud.fetch_userdata_with_keymail(keymail)
    this.logged_in_user = this.ud

    // let userRef = ref(this.db, '/users/' + keymail);

    // get(userRef).then((user_detail)=>{
    //                     if (user_detail.exists())
    //                     {
    //                       //console.log("user_detail.val():", user_detail.val())
    //                       this.logged_in_user = user_detail.val()
    //                       const data = user_detail.val()
    //                       this.ud.email = data.email
    //                       this.ud.name = data.name
    //                       this.ud.username = data.username
    //                     }
    //                     else
    //                     {
    //                       console.log("No Data Available");
    //                     }
    //                     }).catch((error) => {console.error(error)});
  }




  ngOnChanges()
  {
    console.log("Changed")
  }

  go_to_profile() {
    this.router.navigate(['/profile'])
  }






}
