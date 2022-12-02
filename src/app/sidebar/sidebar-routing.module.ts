import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
  {
    path: 'new-sale',
    loadChildren: () => import('../new-sale/new-sale.module').then( m => m.NewSalePageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('../client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('../sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('../providers/providers.module').then( m => m.ProvidersPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}
