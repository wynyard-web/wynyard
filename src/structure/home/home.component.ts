import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ActivatedRoute, Router} from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  username:any= ""
  email:any = ""
  // public w:any;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.email = params.get("email"));
    this.fetchUsername(this.email)
    // this.w = window.innerWidth;
  }



  ngOnChanges()
  {
    console.log("Changed")
  }

  go_to_profile() {
    this.router.navigate(['/profile'], 
    {
      queryParams : { email: this.email}
    })
  }

  app = initializeApp(environment.firebase)

  fetchUsername(em : string) {
  const realdb = getDatabase(this.app)
  em = em.replace(".", "")
  const realRef = ref(realdb, '/users/' + em);
  onValue(realRef, (snapshot) => {
    const data = snapshot.val();
    this.username = data.username    
  });
}


}
