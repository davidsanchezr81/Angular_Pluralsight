import { NgModule } from '@angular/core';

import { ProductListComponent } from '../../api/products/product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [    // when this module is created, the commonModule is added. We need to add the rest of the modules needed (Forms, Router)
    //CommonModule, -- since they were added to the exports in the shared.module this two are removed from here
    //FormsModule,
    RouterModule.forChild([ 
    { path: 'products', component: ProductListComponent },
    {path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent},


    ]),
    SharedModule   // this is added when we create the SharedModule using the CLI
  ],
  declarations: [             // when this module is automatically created using the angular cli, this declaration is empty
    ProductListComponent,     // therefore we need to add the modules manually and remove them from the app.module becuase it no longer need them
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StarComponent -- since it was added to the exports in the shared.module this is removed from here
  ]
})
export class ProductModule { }
