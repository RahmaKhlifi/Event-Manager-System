import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  events : Event[] = [];
  errMess!: string;
  isWaiting: boolean = true;
  constructor(private eventserv : EventService , private router : Router) { }
  ngOnInit(): void {
      this.eventserv.getEventsByAdmin(1).subscribe({
        next: (events: Event[]) => {
          this.events = events;
          this.isWaiting = false;
        },
        error: (errmess: string) => {
          this.events = [];
          this.errMess = errmess;
          this.isWaiting = false;
        },
        complete: () => {
          console.log("Complete");
        }
      });
  }
  handleEmit(){
    this.isWaiting = true;
    this.eventserv.getEventsByAdmin(1).subscribe({
      next: (events: Event[]) => {
        this.events = events;
        this.isWaiting = false;
      },
      error: (errmess: string) => {
        this.events = [];
        this.errMess = errmess;
        this.isWaiting = false;
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }
  onEventDeleted(id: number) {
    this.events = this.events.filter(product => product.id !== id);
  } 
  onAddEvent(){
    this.router.navigateByUrl("/manage/-1")
   }
  
}
