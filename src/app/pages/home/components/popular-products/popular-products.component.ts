import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../../../../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent {
  products = PRODUCTS;

  constructor(private cartService: CartService) {}

  onAdd(product: Product) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  }
}
