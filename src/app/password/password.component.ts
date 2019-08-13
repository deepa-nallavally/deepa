import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Validator } from '../validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  form:FormGroup;

  constructor(fb:FormBuilder) {
    this.form=fb.group({
      oldPassword:['',Validators.required,Validator.validOldPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    },
    {
      validators:Validator.passwordShouldMatch
    });
    }

  ngOnInit() {
  }
  get oldpassword(){
    return this.form.get('oldPassword');
  }
  get newpassword(){
    return this.form.get('newPassword');
  }
  get confirmpassword(){
    return this.form.get('confirmPassword');
  }

}