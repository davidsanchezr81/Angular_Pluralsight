import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../api/products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule} from '@angular/router'; 
import { ProductDetailGuard } from './products/product-detail.guard';
// this last import registers the router service 
//also declares the router directives:
// routerLink and router-outlet
//ALSO, it exposes the routes, before we can navigate there, they need to be available!
// When you import this module you can use any router directives available
//

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // this is in case the requested Url doesnot match with any declared path in the router
    ])
    
    //RouterModule.forRoot([], { useHash: true }) // this is the router service provider
    //the method forRoot and pass the array of routes
    // this establishes the routes of the root of our application
   // the useHash is to be able to use the hash stile routes instead of the HTML5 routes style
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
