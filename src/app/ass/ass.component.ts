import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass',
  templateUrl: './ass.component.html',
  styleUrls: ['./ass.component.scss']
})
export class AssComponent implements OnInit {
  isSelected=true;
  canSave=false;
  
  constructor() { }

  ngOnInit() {
  }

}
