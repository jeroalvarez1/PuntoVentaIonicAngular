/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup,FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

/*   val= 'Sin Factura'; */

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
 /*  alert controler del editar en listado de cliente */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desea editar el cliente!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  /*  alert controler del editar en listado de cliente */
  async presentDelete() {
    const alert = await this.alertController.create({
      header: 'Desea borrar el cliente!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

/*    Se verifica el list del html y retorna lo seleccionado
rFactura(type: string): void {

    if(type==='a'){
      this.val='Factura A';
    }
    else if(type==='b'){
      this.val='Factura B';
    }
    else if(type==='c'){
      this.val='Factura C';
    }
    else{
      this.val='Sin factura';
    }
  }
 */
  currentFactura = undefined;

  facturas = [
    {
      id: 1,
      name: 'Factura A',
      type: 'factura'
    },
    {
      id: 2,
      name: 'Factura B',
      type: 'factura'
    },
    {
      id: 3,
      name: 'Factura C',
      type: 'factura'
    },
    {
      id: 4,
      name: 'Sin Factura',
      type: 'factura'
    }
  ];

  compareWith(o1, o2) {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentFactura = ev.target.value;
  }
  cCuenta= undefined;

  cuentas = [
    {
      id: 1,
      name: 'Sin Cuenta Corriente',
      type: 'Cuenta corriente'
    },
    {
      id: 2,
      name: 'Con Cuenta corriente',
      type: 'Cuenta corriente'
    },
  ];

  compareWiths(o1, o2) {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChanges(ev) {
    this.cCuenta = ev.target.value;
  }
  addClient = new FormGroup({
    name: new FormControl('', Validators.required),
    businessName: new FormControl('',Validators.required),
    direction: new FormControl('',Validators.required),
    cuitNumber: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    typeFacture: new FormControl('',Validators.required),
    currentAccounts: new FormControl('',Validators.required)
  });
}

