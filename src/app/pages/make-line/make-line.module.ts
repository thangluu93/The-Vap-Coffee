import { MyUiModule } from 'src/app/my-ui/my-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeLineRoutingModule } from './make-line-routing.module';
import { MakeLineComponent } from './make-line.component';
import { MakeLineService } from 'src/app/services/make-line.service';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MakeLineComponent],
  imports: [
    CommonModule,
    MakeLineRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MyUiModule
  ],
  providers: [MakeLineService]
})
export class MakeLineModule { }
