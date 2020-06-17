import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeLineComponent } from './make-line.component';

const routes: Routes = [{ path: '', component: MakeLineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeLineRoutingModule { }
