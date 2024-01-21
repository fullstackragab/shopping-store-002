import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);
  cart = signal<Cart>({
    items: [],
    count: 0,
    total: 0,
  });
  constructor() {}
  addItem(item: CartItem) {
    this.items.update((prevItems) => {
      return [...prevItems, item];
    });
  }
  updateItem(item: CartItem, quantity: number = 1) {
    this.items.update((prevItems) => {
      const modifiedItems = [...prevItems];
      const modifiedItem = modifiedItems.find((t) => t.id === item?.id);
      modifiedItem!.quantity = quantity;
      return modifiedItems;
    });
  }
  removeItem() {}
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}
