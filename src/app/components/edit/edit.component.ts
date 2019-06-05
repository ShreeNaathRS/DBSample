import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup,  FormBuilder } from 'node_modules/@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,  AfterContentChecked {
  
  inputForm:FormGroup;
  value:any;
  id:number;
  email:any;
  password:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private httpService:HttpService,
    private fb:FormBuilder) { }

    ngOnInit() {
      this.id=this.activatedRoute.snapshot.params.id;
      this.httpService.getHttpParam(this.id).subscribe((value)=>{
        this.value=value;
      });

      this.inputForm = this.fb.group({
        email : this.fb.control(this.email),
        password : this.fb.control(this.password)
      });
  
    }

  ngAfterContentChecked(): void {
       if(this.value){
        this.email=JSON.parse(`${JSON.stringify(this.value)}`).data.name;
        this.password=JSON.parse(`${JSON.stringify(this.value)}`).data.password;
        this.inputForm.setValue({"email":this.email,"password":this.password});
    }
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
