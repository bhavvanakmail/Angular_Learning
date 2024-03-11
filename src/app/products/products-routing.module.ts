//self created module

import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { LaptopComponent } from "./laptop/laptop.component";
import { TabletComponent } from "./tablet/tablet.component";
import { TvComponent } from "./tv/tv.component";
import { WashingmachineComponent } from "./washingmachine/washingmachine.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '',
    component:ProductsComponent,
    children: [

    {path: 'laptop',component: LaptopComponent},
    {path: 'tablet',component: TabletComponent},
    {path: 'tv',component: TvComponent},
    {path: 'washingmachine',component: WashingmachineComponent},
  ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class productRoutingModule{

}
