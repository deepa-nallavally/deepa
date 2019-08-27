import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl(),
  });

  constructor(private service:DataserviceService,private router:Router) { }

  ngOnInit() {
  }
  submitDetails(){
    this.service.Details=(this.form.value);
    console.log(this.service.Details);
    if(this.service.Datas.find(element => element.Username === this.service.Details.Username && element.Password===this.service.Details.Password)){
      return this.router.navigate(['/submit']);
    }else{
      return this.router.navigate(['/login']);
    }
  }
}
