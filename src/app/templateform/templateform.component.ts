import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
  contactMethods=[
    {id:1,name:'email'},
    {id:2,name:'phone'},
  ];
  log(x){
    console.log(x);
  }
  constructor() { }

  ngOnInit() {
  }
submit(fo){
console.log(fo);
}
}
