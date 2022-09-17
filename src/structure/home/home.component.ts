import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  username:any= ""
  public w:any;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.username = params.get("user"));

    this.w = window.innerWidth;


  }



  ngOnChanges()
  {
    console.log("Changed")
  }
}
