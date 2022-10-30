import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDataService } from 'src/Services/user-data.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private userService:UserDataService) { }

  ngOnInit() {

  }

  @Output() newComment = new EventEmitter<String>()

  @Input() comments:any;

  @Input() username="";

  addNewItem(value: string) {

    this.newComment.emit(value);

  }



}
