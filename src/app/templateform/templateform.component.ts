import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
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
