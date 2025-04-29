import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
logout() {
this.authserv.logout();
}
  isLoggedIn: boolean = false;
  constructor(private authserv : AuthService){}
  ngOnInit(): void {
    this.authserv.authObserver$.subscribe({
      next: (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      },
      error: (errmess: string) => {
        console.error(errmess);
      }
    });
  }

}
