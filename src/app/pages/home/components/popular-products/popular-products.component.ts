import { Component } from '@angular/core';
import { PRODUCTS } from '../../../../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent {
  products = PRODUCTS;
}
