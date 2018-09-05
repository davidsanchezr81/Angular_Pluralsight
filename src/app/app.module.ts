import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule} from '@angular/router'; 
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
// this last import registers the router service 
//also declares the router directives:
// routerLink and router-outlet
//ALSO, it exposes the routes, before we can navigate there, they need to be available!
// When you import this module you can use any router directives available
//

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // this is in case the requested Url doesnot match with any declared path in the router
    ]),
    ProductModule // **** this module is added automatically when we use the cli to create this ProductModule. The folders are created automatically as well 
    //CREATE src/app/products/product.module.spec.ts (283 bytes)
    //CREATE src/app/products/product.module.ts (191 bytes)
    
    //RouterModule.forRoot([], { useHash: true }) // this is the router service provider
    //the method forRoot and pass the array of routes
    // this establishes the routes of the root of our application
   // the useHash is to be able to use the hash stile routes instead of the HTML5 routes style
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
