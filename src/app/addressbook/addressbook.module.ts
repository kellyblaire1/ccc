import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressbookRoutingModule } from './addressbook-routing.module';
import { AddressbookComponent } from './addressbook.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddressbookRoutingModule
  ]
})
export class AddressbookModule { }
