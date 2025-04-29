import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class LowerPlaceService {

  constructor(private eventserv : EventService) { }
  
  LowerPlace(eventID: number) {
    this.eventserv.getEvent(eventID).subscribe((event) => {
      if (event) {
        event.numplaces = event.numplaces - 1;
        this.eventserv.updateEvent(event).subscribe(() => {
          console.log('Event place updated to Lower Place');
        });
      } else {
        console.error('Event not found');
      }
    });
  }
}
