import { Component, OnInit } from '@angular/core';
import {   
  FormGroup,
  FormControl,
  Validators,
  FormBuilder 
} from "@angular/forms";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public formBuilder: FormBuilder, public alertController: AlertController, public navController: NavController) {  
    this.formularioRegistro = this.formBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
   }

  ngOnInit() {
  }

  async guardar(){ 
    var formulario = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    } else {
      var usuario = {
        nombre: formulario.nombre,
        password: formulario.password,
        confirmacionPassword: formulario.confirmacionPassword
      }
      if (usuario.password !== usuario.confirmacionPassword) {
        const alert2 = await this.alertController.create({
          header: 'Datos invalidos',
          message: 'Las contraseñas no coinciden',
          buttons: ['Aceptar']
        });
        await alert2.present();
        return;
      } else {
        localStorage.setItem('usuario', JSON.stringify(usuario));


        localStorage.setItem('ingresado', 'true');
        this.navController.navigateRoot('home');
        console.log("registrado")
      }
    }
  }
}
