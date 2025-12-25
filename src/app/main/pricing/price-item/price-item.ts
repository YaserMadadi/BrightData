import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-item',
  imports: [
    CommonModule
  ],
  templateUrl: './price-item.html',
  styleUrl: './price-item.scss',
})
export class PriceItem {

  @Input()
  planName: string = 'Plan Name';

  @Input()
  planDescription: string = 'Plan Description';



  @Input()
  projectMin: number = 0;

  @Input()
  projectMax: number = 0;

  @Input()
  subscriptionMin: number = 0;

  @Input()
  subscriptionMax: number = 0;


}
