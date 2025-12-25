import { Component } from '@angular/core';
import { FooterCard } from './footer-card/footer-card';
import { Newsletter } from './newsletter/newsletter';
import { ServicesList } from './services-list/services-list';
import { UsefulLinks } from './useful-links/useful-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    // FooterCard,
    // Newsletter,
    // ServicesList,
    // UsefulLinks
  ]
})
export class FooterComponent {
  constructor() { }
}