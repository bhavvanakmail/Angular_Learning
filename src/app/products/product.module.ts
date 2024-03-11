import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductsComponent } from './products.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../utility/utility.module';
import { productRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmachineComponent,
    
  ],
  imports: [
    CommonModule,
    productRoutingModule,
    RouterModule,
    UtilityModule
  ],
 
})
export class ProductModule {
  constructor() {
    console.log('ProductModule called'); 
  }
 }
