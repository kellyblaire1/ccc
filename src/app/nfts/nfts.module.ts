import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftsRoutingModule } from './nfts-routing.module';
import { NftsComponent } from './nfts.component';
import { ConnectModule } from '../connect/connect.module';


@NgModule({
  declarations: [
    NftsComponent
  ],
  imports: [
    CommonModule,
    ConnectModule,
    NftsRoutingModule
  ]
})
export class NftsModule { }
