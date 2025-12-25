import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

// import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    CommonModule,
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('BrightData');

  ngAfterViewInit() {
    // test
    import('aos').then(AOS => {
      AOS.init({
        duration: 1200, // animation duration in ms
        once: true      // whether animation should happen only once
      });
    });

    // AOS.init({
    //   duration: 1200, // animation duration in ms
    //   once: true      // whether animation should happen only once
    // });
  }
}
