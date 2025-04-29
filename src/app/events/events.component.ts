import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { BaseURL } from '../shared/base-url';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  baseurl = BaseURL;
  events: Event[] = [];
  iswaiting: boolean = false;
 /* event : Event = {
    id: 0,
    title: 'first event',
    description: 'this is the first event',
    Date: new Date(),
    location: ' location',
    numplaces: 15,
    category: 'conference',
    adminID: 1,
    image: 'assets/images/test1.jpg',
    price: 50 
  }*/
 redirect(eventId: number) {
    console.log('Event ID:', eventId);
    this.router.navigate(['participate/'+eventId]);
 }
 constructor(private eventService: EventService , private router: Router) {
    // this.events = [this.event];

  }
  ngOnInit(): void {
    this.iswaiting = true;
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
        console.log(this.events);
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
