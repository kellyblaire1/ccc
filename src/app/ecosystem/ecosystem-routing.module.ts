import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcosystemComponent } from './ecosystem.component';

const routes: Routes = [{ path: '', component: EcosystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcosystemRoutingModule { }
