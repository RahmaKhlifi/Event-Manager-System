import { Injectable } from '@angular/core';
import { BaseURL } from '../shared/base-url';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../shared/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public BaseURL = BaseURL+'events/';
  constructor(private router:Router , private http : HttpClient) { }

  getEvents():Observable<Event[]>{
     return this.http.get<Event[]>(this.BaseURL);
  }
  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.BaseURL + id);
  }
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.BaseURL, event);
  }
  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.BaseURL + event.id, event);
  }
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(this.BaseURL + id);
  }
  getEventsByCategory(category: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.BaseURL + '?category=' + category);
  }
  getEventsByAdmin(adminID: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.BaseURL + '?adminID=' + adminID);
  }
  getEventsByDate(date: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.BaseURL + '?date=' + date);
  }
  getEventsByLocation(location: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.BaseURL + '?location=' + location);
  }

  getEventsByPrice(price: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.BaseURL + '?price=' + price);
  }
  getEventsByTitle(title: string): Observable<Event[]> {  
    return this.http.get<Event[]>(this.BaseURL + '?title=' + title);
  }
}
