import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../api/products/product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [    // when this module is created, the commonModule is added. We need to add the rest of the modules needed (Forms, Router)
    CommonModule,
    FormsModule,
    RouterModule.forChild([ 
    { path: 'products', component: ProductListComponent },
    {path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent},


    ])
  ],
  declarations: [             // when this module is automatically created using the angular cli, this declaration is empty
    ProductListComponent,     // therefore we need to add the modules manually and remove them from the app.module becuase it no longer need them
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class ProductModule { }
