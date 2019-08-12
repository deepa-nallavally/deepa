import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.scss']
})
export class ExComponent implements OnInit {
@Input() title:string;


isExpanded=false;

  constructor() { }

  ngOnInit() {
  }
toggle(){
  this.isExpanded=!this.isExpanded;
}
}
