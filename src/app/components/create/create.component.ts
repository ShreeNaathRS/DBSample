import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormBuilder } from 'node_modules/@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inputForm:FormGroup;
  constructor(private fb:FormBuilder, private httpService:HttpService) { }

  ngOnInit() {
    this.inputForm = this.fb.group({
      email : this.fb.control(''),
      password : this.fb.control('')
    });

  }

  onSubmit(){
    console.log(`Email : ${this.inputForm.get('email').value} and Password : ${this.inputForm.get('password').value}`);
    this.httpService.postHttp({
      "name" : this.inputForm.get('email').value,
      "password" : this.inputForm.get('password').value
    },{
      headers :{
      "Access-Control-Allow-Method":"POST"
      }
    }).subscribe((data)=>{
      console.log('Response Data : '+JSON.stringify(data));
    });
  }

}

