import { Component } from '@angular/core';
import { CardItem } from './card-item/card-item';

@Component({
  selector: 'app-cards',
  imports: [
    CardItem
  ],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

}
