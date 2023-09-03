import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
