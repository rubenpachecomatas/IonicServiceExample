import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //Array de tareas
  tasks: Task[]=[]; //Inicializar vacio

  constructor() {
    this.tasks= [
      {
        id:0,
        title:"Dar estrella al repositorio",
        description:"Apoyar al repositorio de Iván para seguir creciendo"
      },

      {
        id:1,
        title:"Estudiar Ionic",
        description:"Familiarizarse con el entorno y con el lenguaje "
      },

    ];


    }
      //getter para devolver tareas
      getTasks():Task[]{
        return this.tasks;
      }
}
