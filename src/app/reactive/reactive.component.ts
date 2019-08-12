import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormsModule } from '@angular/forms';
import { Validation } from '../validation';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  form=new FormGroup({
    account:new FormGroup({
      Username:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validation.cannotContainSpace],
        Validation.shouldBeUnique
      ),
      Password:new FormControl('',Validators.required)
    })
  });

  constructor() { }

  ngOnInit() {
  }
get username(){
  return this.form.get('account.Username');
}

get password(){
  return this.form.get('account.Password');
}
login(){
  this.form.setErrors({
    invalidlogin:true
  });
}
}