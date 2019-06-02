import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users=[{'email':'shreers@ymail.com'},{'email':'rsshreenaath@gmail.com'}];

  constructor() { }

  ngOnInit() {
  }

}
