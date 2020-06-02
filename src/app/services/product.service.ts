import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Cà phê sữa', 25),
    new Product(2, 'Espresso', 29), 
    new Product(3, 'Caramel Machiato', 55), 
    new Product(4, 'Capuchino', 45), 
    new Product(5, 'Americano', 50),


  ]

  constructor() { }

  getProduct():Product[]{
    return this.products;
  }
}
