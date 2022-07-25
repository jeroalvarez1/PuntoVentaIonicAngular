import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  paginas = [
    {
      titulo: 'Home',
      url: '/sidebar/home',
      icono: 'home'
    },
    {
      titulo:'Nueva Venta',
      url: '/sidebar/new-sale',
      icono: 'add'
    },
    {
      titulo:'Clientes',
      url: '/sidebar/client',
      icono: 'person'
    },
    {
      titulo:'Productos',
      url: '/sidebar/products',
      icono: 'clipboard'
    },
    {
      titulo:'Ventas',
      url: '/sidebar/sales',
      icono: 'bookmarks'
    },
    {
      titulo:'Proveedor',
      url: '/sidebar/providers',
      icono: 'bag'
    },  {
      titulo:'Configuracion',
      url: '/sidebar/settings',
      icono: 'settings'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
