import { Component } from '@angular/core';
import { Team } from './team/team';
import { Services } from './services/services';
import { Pricing } from './pricing/pricing';
import { Portfolio } from './portfolio/portfolio';
import { Hero } from './hero/hero';
import { Contact } from './contact/contact';
import { Clients } from './clients/clients';
import { Cards } from './cards/cards';
import { Calltoaction } from './calltoaction/calltoaction';
import { About } from './about/about';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    Team,
    Services,
    Pricing,
    // Portfolio,
    Hero,
    Contact,
    // Clients,
    Cards,
    Calltoaction,
    About
  ]
})
export class MainComponent {
  constructor() { }
}