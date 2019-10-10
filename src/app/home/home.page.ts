import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Rellenar con las tareas que me de el servicio
  tasks:Task[]=[];
 

  //Hay que inyectar el servicio al constructor (aquí)

  constructor(private taskService:TaskService) { }

  //Cuando se inicie la página, se carguen los datos
  ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }
}
