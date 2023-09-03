import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogInfoComponent } from './blog-info.component';

const routes: Routes = [{ path: '', component: BlogInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogInfoRoutingModule { }
