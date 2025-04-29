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
resetFilters() {
  this.iswaiting = true;
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
        this.filteredEvents = events;
        console.log(this.events);
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error fetching events:', error);
        this.iswaiting = false;
      }
    );
  this.searchQuery = '';
}
  baseurl = BaseURL;
  events: Event[] = [];
  filteredEvents: Event[] = [];
  iswaiting: boolean = false;
  searchQuery: string = '';

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
        this.filteredEvents = events;
        console.log(this.events);
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  filterByCategory(category: string): void {
    this.iswaiting = true;
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events.filter(event => event.category === category);
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error filtering events by category:', error);
        this.iswaiting = false;
      }
    );
  }

  filterByTitle(title: string): void {
    this.iswaiting = true;
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events.filter(event => event.title.toLowerCase().includes(title.toLowerCase()));
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error filtering events by title:', error);
        this.iswaiting = false;
      }
    );
  }

  filterByPrice(minPrice: number, maxPrice: number): void {
    this.iswaiting = true;
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events.filter(event => event.price >= minPrice && event.price <= maxPrice);
        this.iswaiting = false;
      },
      (error) => {
        console.error('Error filtering events by price:', error);
        this.iswaiting = false;
      }
    );
  }

  filterEvents(query: string): void {
    const lowerQuery = query.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.category.toLowerCase().includes(lowerQuery) ||
      event.title.toLowerCase().includes(lowerQuery) ||
      event.price.toString().includes(lowerQuery)
    );
  }

  searchEvents(): void {
    const lowerQuery = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.category.toLowerCase().includes(lowerQuery) ||
      event.title.toLowerCase().includes(lowerQuery) ||
      event.price.toString().includes(lowerQuery)
    );
  }
}
