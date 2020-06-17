import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeLineRoutingModule } from './make-line-routing.module';
import { MakeLineComponent } from './make-line.component';
import { MakeLineService } from 'src/app/services/make-line.service';


@NgModule({
  declarations: [MakeLineComponent],
  imports: [
    CommonModule,
    MakeLineRoutingModule
  ],
  providers: [MakeLineService]
})
export class MakeLineModule { }
