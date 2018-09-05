import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent // StarComponent is added manually
  ],
  exports:[       // Since the StarComponent is going to be used by another component (product-list) we need to export it from here.
                  // The exports section is not created automatically by the CLI, we need to add it manually   
                  // CommonModule  and FormsModule has been added manually as well    
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
