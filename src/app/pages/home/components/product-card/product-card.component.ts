import { Component, Input } from '@angular/core';
import { Product } from '../../../../data/products.data';
import { TruncatePipe } from '../../../../pipes/truncate.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
