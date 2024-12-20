import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormBuilder,FormGroup,Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm:FormGroup;
  registroMessage: string="";
  usuariosExistentes: string[] = ['Raul', 'Jossue', 'Pedro','Amaro'];

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router, private toastController: ToastController){

    //Iniciar formulario para validar

    this.registroForm=this.formBuilder.group({
      usuario:['',Validators.required],
      rut:['',Validators.required],
      correo:['',Validators.required],
      telefono:['',Validators.required],
      contraseña:['',Validators.required],

    })
  }

  async registro() {
    const usuarioIngresado = this.registroForm.value.usuario;
    // Verifica si el usuario ya existe
    if (this.usuariosExistentes.includes(usuarioIngresado)) {
      await this.presentToast(
        `El nombre "${usuarioIngresado}" ya existe, Elige otro.`,
        'danger'
      );
    } else if (this.registroForm.valid) {
      await this.presentToast('Usuario creado exitosamente', 'success');
      //Agrega el nuevo usuario a la lista simulada
      this.usuariosExistentes.push(usuarioIngresado);
    } else {
      await this.presentToast(
        'Error al crear el usuario, revisa los campos.',
        'danger'
      );
    }
  }
  
  // Método para mostrar mensajes con un Toast
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }


  ngOnInit() {
  }

}
