import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coursesform',
  templateUrl: './coursesform.component.html',
  styleUrls: ['./coursesform.component.scss']
})
export class CoursesformComponent implements OnInit {
  form=new FormGroup({
    topics:new FormArray([])

  });

  constructor() { }

  ngOnInit() {
  }
  addTopic(topic){
    this.Topics.push(new FormControl(topic.value));
    topic.value='';
  }
  get Topics(){
    return this.form.get('topics')as FormArray;
  }
  remove(topic){
    let index=this.Topics.controls.indexOf(topic);
    this.Topics.removeAt(index);
  }

}
