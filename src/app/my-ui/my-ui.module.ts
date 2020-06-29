import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavBarComponent,
    ProductItemComponent,
    ProductListComponent,
    CartItemComponent,
    CartDialogComponent,
    FooterComponent],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    NavBarComponent,
    ProductItemComponent,
    ProductListComponent,
    CartItemComponent,
    CartDialogComponent,
    FooterComponent
  ]

})
export class MyUiModule { }
