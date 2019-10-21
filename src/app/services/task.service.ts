import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //Array de tareas
  tasks: Task[]=[]; //Inicializar vacio

  constructor(private storage: Storage) {
    this.storage.get('tasks').then(
      data => this.tasks = data !== null ? data : []
    );
  }

  getTasks():Task[]{
    return this.tasks;
  }

  getTask(id: number): Task {
     return this.tasks.filter(t => t.id == id)[0];
  }

  saveTask(t: Task) {
    if (t.id == undefined) {
      this.addTask(t);
    } else {
      this.updateTask(t);
    }
    this.storage.set('task', this.tasks);
  }

  addTask(t: Task) {
    let id = 0;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1].id + 1;
    }
    const taskToSave = {
      id: id,
      title: t.title,
      description: t.description
    };
    this.tasks.push(taskToSave);
  }

  updateTask(t: Task) {
    const index = this.tasks.findIndex(tAux => tAux.id == t.id);
    this.tasks[index].title = t.title;
    this.tasks[index].description = t.description;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id);
  }
}
