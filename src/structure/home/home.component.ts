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

  username:any= ""
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
    if(this.ud.Useremail=="")
    {
      console.log("Not Logged In")
    }
    else
    {
      this.fetch_user_details(this.ud.Useremail)
    }
  }

  fetch_user_details(user_email:any)
  {
    console.log(user_email)

    let keymail = user_email.replace(".","");
    let userRef = ref(this.db,'/users/'+keymail);

    get(userRef).then((user_detail)=>{
                        if (user_detail.exists())
                        {
                          this.logged_in_user = user_detail.val()
                          this.ud.UserData = user_detail.val()
                        }
                        else
                        {
                          console.log("No Data Available");
                        }
                        }).catch((error) => {console.error(error)});
  }




  ngOnChanges()
  {
    console.log("Changed")
  }

  go_to_profile() {
    this.router.navigate(['/profile'])
  }



  // fetchUsername(em : string) {
  // const realdb = getDatabase(this.app)
  // em = em.replace(".", "")
  // const realRef = ref(realdb, '/users/' + em);
  // onValue(realRef, (snapshot) => {
  //   const data = snapshot.val();
  //   this.username = data.username
  // });
// }


}
