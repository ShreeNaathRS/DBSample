import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private users=[];

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getHttp().subscribe((users:JSON)=>{
      console.log(users["data"]);
      this.users=users["data"];
    });
  }
}
