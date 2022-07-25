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
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    } else {
      var formulario = this.formularioLogin.value;

      var usuarioLog = {
        username: formulario.nombre,
        email: formulario.email,
        password: formulario.password
      }

      let url = 'http://localhost:8888/api/register';
      let response = await fetch(url, {
        "method": 'POST',
        "body": JSON.stringify(usuarioLog),
        "headers": {
          "Content-Type": 'application/json'
        }
      });

      let resp = await response.json();
      
      if (resp == "NC-PC") {
        localStorage.setItem('ingresado', 'true');
        this.navController.navigateRoot('home');
      } else if (resp == "NC-PI") {
        const alert2 = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'La contraseña es incorrecta',
          buttons: ['Aceptar']
        });

        await alert2.present();
        return;
      } else if (resp == "NI") {
        const alert3 = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Nombre de usuario incorrecto',
          buttons: ['Aceptar']
        });

        await alert3.present();
        return;
      }
  }
}
}
