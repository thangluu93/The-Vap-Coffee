import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  productList:Product[]=[];
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productList=this.productService.getProduct();
  }



  
}

