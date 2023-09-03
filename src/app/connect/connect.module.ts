import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectDirective } from '../shared/directives/connect.directive';
import { ConnectComponent } from './connect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConnectComponent, ConnectDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ConnectComponent, ConnectDirective]
})
export class ConnectModule { }
