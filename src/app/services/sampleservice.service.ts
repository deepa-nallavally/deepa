import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  private Url='http://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }
  
  getDatas(){
    return this.http.get(this.Url);
  }
  createPost(post){
    return this.http.post(this.Url,JSON.stringify(post));
  }
  updatePost(data){
    return this.http.patch(this.Url + '/' + data.id,JSON.stringify({title:true}));
  }
  deletePost(data){
    return this.http.delete(this.Url+'/'+data.id);
  }
}
