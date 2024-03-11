import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directives/custom.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { CrudComponent } from './crud/crud.component';
import { TodoComponent } from './todo/todo.component';
import { PipeComponent } from './pipe/pipe.component';
import { ConvertPipe } from './customPipe/convert.pipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { UtilityModule } from './utility/utility.module';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    SimpleformComponent,
    ReactiveformComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CrudComponent,
    TodoComponent,
    PipeComponent,
    ConvertPipe,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    LoginComponent,
    LifecycleComponent,
    RxjsoperatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilityModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi : true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /**
   *
   */
  constructor() {
    console.log('AppModule called'); 
  }
}
