import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task;
  constructor() { }

  ngOnInit() {
    this.task={
      id: 0,
      title:"",
      description:""
    }
  }
}
