import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.html',
  styleUrl: './card-item.scss',
})
export class CardItem {

  @Input()
  public index: string = '0';

  @Input()
  header: string = 'header';

  @Input()
  body: string = 'body';

  @Input()
  delay: number = 100;


}
