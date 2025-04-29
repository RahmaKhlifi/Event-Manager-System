import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../shared/event';
import { BaseURL } from '../shared/base-url';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  baseurl = BaseURL;
 @Input() event : Event ;
 @Output() eventSelected: EventEmitter<number> = new EventEmitter<number>();

 isLoading: boolean = false;
  public constructor(private eventserv: EventService) { }
    
  deleteEvent(id: number) {
    this.isLoading = true; // Activer le chargement
    this.eventserv.deleteEvent(id).subscribe(
      (response) => {
        console.log('Event deleted successfully:', response);
        this.isLoading = false;
        this.eventSelected.emit(0); // Désactiver le chargement
        // Vous pouvez également émettre un événement ou mettre à jour la liste des événements ici
      },
      (error) => {
        console.error('Error deleting event:', error);
        this.isLoading = false; // Désactiver le chargement même en cas d'erreur
      }
    );
  }
}
