import { Component, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemCardComponent } from './components/cart-item-card/cart-item-card.component';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  count = computed(() => this.cartService.cart().count);
  total = computed(() => this.cartService.cart().total);
  items = computed(() => this.cartService.cart().items);
  // DEV
  devItems = PRODUCTS.slice(0, 2);
  // DEV
  constructor(private cartService: CartService) {
    this.devItems.forEach((item) =>
      this.cartService.addItem({
        id: item.id,
        name: item.name,
        imageUrl: item.thumbUrl,
        price: item.price,
        quantity: 1,
      })
    );
  }

  onItemQuantityUpdate(quantity: number, id: string) {
    let increase = true;
    const item = this.items().find((t) => t.id === id);
    if (quantity < item!.quantity) increase = false;
    if (increase) {
      this.cartService.increaseItem(item!);
    } else {
      this.cartService.decreaseItem(item!);
    }
  }

  onRemoveItem(id: string) {
    const item = this.items().find((t) => t.id === id);
    this.cartService.removeItem(item!);
  }
}
