import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatCardSmImage} from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';

import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NavBarComponent,
    ProductItemComponent,
    ProductListComponent,
    CartItemComponent,
    CartDialogComponent,
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    NavBarComponent,
    ProductItemComponent,
    ProductListComponent,
    CartItemComponent,
    CartDialogComponent,
  ]

})
export class MyUiModule { }
