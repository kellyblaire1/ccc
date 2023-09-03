import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcosystemRoutingModule } from './ecosystem-routing.module';
import { EcosystemComponent } from './ecosystem.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    EcosystemComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    EcosystemRoutingModule
  ]
})
export class EcosystemModule { }
