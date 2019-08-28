import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Validation } from '../validation';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  rform=new FormGroup({
    Username:new FormControl('',Validators.required),
    Email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]")]),
    PhoneNumber:new FormControl('',[Validators.required,Validators.pattern("[789][0-9]+"),Validators.maxLength(10)]),
    Password:new FormControl('',[Validators.required]),
    Confirmpassword:new FormControl('',[Validators.required]),
  },{
     validators: Validation.passwordMatch
  });

  constructor(private service:DataserviceService,private router:Router) { }

  ngOnInit() {
    console.log(this.rform);    
  }
  get username(){
    return this.rform.get('Username');
  }
  get email(){
    return this.rform.get('Email');
  }
  get phoneNumber(){
    return this.rform.get('PhoneNumber');
  }
  get password(){
    return this.rform.get('Password');
  }
  get confirmpassword(){
    return this.rform.get('Confirmpassword');
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
  getData(){
   this.service.Datas.push(this.rform.value);
   console.log(this.service.Datas);
 }
}
