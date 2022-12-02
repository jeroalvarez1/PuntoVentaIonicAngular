import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientPageRoutingModule } from './client-routing.module';
import { ClientPage } from './client.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientPage]
})
export class ClientPageModule {}
