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
isImageTouched: any;
onFileSelected($event: globalThis.Event) {
throw new Error('Method not implemented.');
}
  event: Event = new Event(null,1,"","","","",0,0,"","",""); // Adjusted to match the expected arguments
  isLoading: boolean = false; // Variable pour suivre l'état de chargement
  isUpdate = false;
  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) { }

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
    /*
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (result) => {
        let id = result.get('id');
        if (id != "-1") this.initProduct(id);
      }
    });

  }

  initProduct(id: any) {
    this.productService.getProductById(id)
      .subscribe({
        next: (product) => { this.product = product }
      });

  }*/
  onSubmit() {
    /*console.log('add product')
    this.productService.addProduct(this.product);
    this.router.navigateByUrl("/products");*/
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
  }
}
