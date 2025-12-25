import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar.component';
import { Topbar } from './topbar/topbar.component';

@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    Topbar
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() { }
}