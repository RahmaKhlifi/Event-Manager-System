import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event-Manager-System';
  hatState = 'up';

 

  constructor(private router: Router) {}

  toggleState() {
    this.hatState = this.hatState === 'up' ? 'down' : 'up';
  }

  navigateToGettingStarted() {
    this.router.navigate(['/getting-started']);
  }
}
