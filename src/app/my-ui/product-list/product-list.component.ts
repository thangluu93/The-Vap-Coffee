import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProduct();
    console.log(this.productList);
  }

}
