import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AptosRoutingModule } from './aptos-routing.module';
import { AptosComponent } from './aptos.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    AptosComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    AptosRoutingModule
  ]
})
export class AptosModule { }
