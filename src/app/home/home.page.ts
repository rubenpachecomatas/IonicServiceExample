import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Rellenar con las tareas que me de el servicio
  tasks:Task[]=[];
 

  //Hay que inyectar el servicio al constructor (aquí)

  constructor(private taskService:TaskService, private router: Router, public alertController: AlertController) { }

  //Cuando se inicie la página, se carguen los datos
  ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }

  goEditTask(id: number) {
      this.router.navigateByUrl(`/edit${ id != undefined ? '/' + id : ''}`);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  async presentAlertConfirm(id:number,title:string) {
    const alert = await this.alertController.create({
      header: 'Borrar Tarea',
      message: `Vas a borrar la tarea <strong>${title}</strong>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteTask(id)
          }
        }
      ]
    });
    await alert.present();
  }

}
