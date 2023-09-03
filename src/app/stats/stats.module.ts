import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
