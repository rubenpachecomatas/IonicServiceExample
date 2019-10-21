import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {
    title:'',
    description:''
  };
  constructor(private taskService:TaskService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id != null) {
      this.task = this.taskService.getTask(+id);
    }
  }

  saveTask() {
    this.taskService.saveTask(this.task);
  }
  
}
