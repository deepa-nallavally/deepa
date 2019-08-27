import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
 da=[];
 det;
  constructor(private Service:DataserviceService) { }

  ngOnInit() {
  this.da = this.Service.Datas;
  this.det=this.Service.Details;
  }


}
