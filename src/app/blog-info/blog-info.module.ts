import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogInfoRoutingModule } from './blog-info-routing.module';
import { BlogInfoComponent } from './blog-info.component';


@NgModule({
  declarations: [
    BlogInfoComponent
  ],
  imports: [
    CommonModule,
    BlogInfoRoutingModule
  ]
})
export class BlogInfoModule { }
