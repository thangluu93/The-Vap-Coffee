import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MyUiModule } from 'src/app/my-ui/my-ui.module';
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,

    MatIconModule,
    MatButtonModule,
    MyUiModule,
  ]
})
export class HomePageModule { }
