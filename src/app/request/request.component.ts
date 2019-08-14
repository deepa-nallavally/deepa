import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  Url;
  datas;
  constructor( private http:HttpClient) { 
   this.Url='http://jsonplaceholder.typicode.com/posts';

  
  }

  ngOnInit() {
   this.http.get(this.Url).subscribe(res=>{
      this.datas =res;
      console.log(this.datas);
    
    });
  }

}
