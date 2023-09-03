import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProRoutingModule } from './pro-routing.module';
import { ProComponent } from './pro.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    ProComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    ProRoutingModule
  ]
})
export class ProModule { }
