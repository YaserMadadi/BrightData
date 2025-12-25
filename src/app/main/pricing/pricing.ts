import { Component } from '@angular/core';
import { PriceItem } from './price-item/price-item';

@Component({
  selector: 'app-pricing',
  imports: [
    PriceItem
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {

}
