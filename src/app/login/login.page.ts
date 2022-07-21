import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public formBuilder: FormBuilder, public alertController: AlertController, public navController: NavController){
    this.formularioLogin = this.formBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async ingresar() {

    var formulario = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario.nombre == formulario.nombre && usuario.password == formulario.password) {
      localStorage.setItem('ingresado', 'true');
      this.navController.navigateRoot('home');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste no son correctos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
  }
}
