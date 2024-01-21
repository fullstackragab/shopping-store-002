import { Component } from '@angular/core';
import { DealsComponent } from './components/deals/deals.component';
import { SalesComponent } from './components/sales/sales.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DealsComponent, SalesComponent, PopularProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
