import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { of, switchMap } from 'rxjs';
import { Event } from '../shared/event';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css']
})
export class ManageEventComponent implements OnInit {
  isUpdate: boolean = false;
 isImageTouched: boolean = false;
 isLoading: boolean = false;
 event: Event = new Event(null,1,"","","","",0,0,"","",""); 
 minDate: string;

  constructor(private router: Router ,private  eventService : EventService , private route : ActivatedRoute) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(result => {
        let id = result.get('id');
        // Vérifie que id n'est ni null ni "-1"
        if (id && id !== "-1") {  
          // Activer le chargement
          this.isLoading = true; 
          this.isUpdate = true;
          // Retourne l'observable de l'événement récupéré
          return this.eventService.getEvent(Number(id));
        } else {
          // Retourne un observable vide si l'ID n'est pas valide
          return of(null); 
        }
      })
    ).subscribe({
      next: (event) => {
        if (event) {
          this.event = event;
          this.isLoading = false; // Désactiver le chargement
        }
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.event.image = file;
    }
  }

  onSubmit(): void {
    this.isLoading = true; // Activer le chargement lors de la soumission du formulaire
    if (this.event.id == null) {
      this.eventService.addEvent(this.event)
        .subscribe({
          next: () => {
           
            this.isLoading = false; //Desactiver le spinner
            this.router.navigateByUrl('/home');
          }
        })
    } else {
      this.eventService.updateEvent(this.event)
        .subscribe({
          next: () => {
            this.isLoading = false; //Desactiver le spinner
            this.router.navigateByUrl('/home');
          }
        })
    };
    console.log('Event submitted:', this.event);
  }
}
