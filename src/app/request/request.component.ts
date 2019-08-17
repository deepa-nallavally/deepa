import { Component, OnInit, Input } from '@angular/core';
import { SampleserviceService } from '../services/sampleservice.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  Url;
  datas;
  constructor( private service:SampleserviceService) {
  }

  ngOnInit() {
    this.service.getDatas()
   .subscribe(res=>{
      this.datas =res;
      console.log(this.datas);
    
    },error=>{
      alert("unexpected error occurred.");
      console.log(error);
    });
    
  }
  create( input:HTMLInputElement){
    let post ={ title:input.value};

    this.service.createPost(post).subscribe((res)=>{
      
      this.service.getDatas().subscribe(res=>{
        this.datas =res;
        console.log(this.datas);
      
      },error=>{
        alert("unexpected error occurred.")
      });

    });
  }
   updatePost(data){
     this.service.updatePost(data).subscribe(res=>{
       console.log(this.datas);
     },error=>{
      alert("unexpected error occurred.")});
    }
  
deletePost(data){
  this.service.deletePost(data.id).subscribe(res=>{
    let index=this.datas.indexOf(data);
    this.datas.splice(index,1);
  },(error:Response)=>{
    if (error.status===404)
      alert("this post has been deleted already")
    else{
      alert("unexpected error occurred.")
    }
    }
  );
}
}
