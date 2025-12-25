import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  imports: [],
  templateUrl: './service-item.html',
  styleUrl: './service-item.scss',
})
export class ServiceItem {

  @Input()
  header: string = '';

  @Input()
  subHeader: string = '';

  @Input()
  iconClass: string = '';

  @Input()
  description: string = '';

  @Input()
  delay: number = 100;
}
