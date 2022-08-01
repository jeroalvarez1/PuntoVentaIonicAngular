import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';
import { NewSalePageRoutingModule } from './new-sale-routing.module';
import { NewSalePage } from './new-sale.page';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSalePageRoutingModule,
    HttpClientModule,


    RouterModule.forChild([
      {
        path: '',
        component: NewSalePage
      }
    ]),
    NgxDatatableModule,
  ],
  declarations: [NewSalePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NewSalePageModule {}
