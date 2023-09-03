import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { MoreComponent } from './more.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    MoreComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    MoreRoutingModule
  ]
})
export class MoreModule { }
