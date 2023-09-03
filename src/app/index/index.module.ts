import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { ConnectDirective } from '../shared/directives/connect.directive';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
