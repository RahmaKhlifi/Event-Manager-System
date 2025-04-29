import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';
import { ParticipantService } from '../services/participant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../shared/participant';
import { LowerPlaceService } from '../services/lower-place.service';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {
  eventId: number;
  Form : FormGroup ;
  iswaiting : boolean = false ;
  constructor( private place : LowerPlaceService,private router : Router, private route: ActivatedRoute, private builder: FormBuilder, private participantserv: ParticipantService){
       this.Form = this.builder.group({
       "name" : ["",[Validators.required , Validators.minLength(3)]],
       "email" : ["",[Validators.required , Validators.email]],
       "phone" : ["",[Validators.required , Validators.pattern("[0-9]{8}")]],
     }) ;
  }  
  ngOnInit(): void {
    this.iswaiting = true ;
    this.route.params.subscribe(params => {
      this.eventId = +params['id']; // Get the event ID from the route parameters
      console.log(this.eventId);
      this.iswaiting = false ;
    }
    );
  }
  
  submiti(){
    this.iswaiting = true
    console.log(this.Form.value);
    let participant : Participant = {
      name: this.Form.value.name,
      email: this.Form.value.email,
      phone: this.Form.value.phone,
      eventId: this.eventId,
      id: null
    };
    
    // Call the service to save the participant
    
    this.participantserv.addParticipant(participant).subscribe(
      response => {
        console.log('Participant added successfully:', response);
        this.place.LowerPlace(this.eventId);
        alert("You have successfully registered for the event");
        this.router.navigate(['/']);
        this.iswaiting = false ;
      },
      error => {
        console.error('Error adding participant:', error);
        this.iswaiting = false ;
      }
    );
   

    this.Form.reset();
  }
}
