import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
   gallery = [
      { src: 'assets/images/conference.jpg', alt: 'Conference Hall', title: 'Conferences', caption: 'Modern venues with top AV' },
      { src: 'assets/images/seminaire.jpg', alt: 'seminaires', title: 'Seminaires',  caption: '' },
      { src: 'assets/images/atelier.jpg', alt: 'atelier', title: 'Ateliers',   caption: 'Elegant décor & planning' }
    ];
}
