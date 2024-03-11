import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './auth_gaurd/authentication.guard';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';

//define the routes
const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'contactus',component: ContactusComponent},
  //lazy loading
  {
    path:'product', canActivate:[AuthenticationGuard],
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
  },
  {
    path:'customer',
    loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  // {path: 'lifecycle',component:LifecycleComponent},
  {path:'rxjs',component:RxjsoperatorComponent},
  {path: '**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule called'); 
  }
 }
