import { Component, OnInit } from '@angular/core';
import { Participant } from '../shared/participant';
import { ParticipantService } from '../services/participant.service';
import { ActivatedRoute } from '@angular/router';
import { LowerPlaceService } from '../services/lower-place.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  Participants: Participant[]=[];
  isloading : boolean = false ;
  iswaiting : boolean[] =[]  ;
  eventID : number ;
 constructor(private participantserv : ParticipantService , private route : ActivatedRoute , private upper : LowerPlaceService){}

  ngOnInit(): void {
    this.isloading = true;
    this.route.params.subscribe(params => {
      const eventId = +params['id']; // Get the event ID from the route parameters
      console.log(eventId);
      this.eventID = eventId;
      this.participantserv.getParticipantsByEvent(eventId).subscribe({
        next: (participants: Participant[]) => {
          this.Participants = participants;
          for(let i = 0; i < this.Participants.length; i++){
            this.iswaiting.push(false);
          };
          this.isloading = false;
        },
        error: (errmess: string) => {
          this.Participants = [];
          this.errMess = errmess;
          this.isloading = false;
        },
        complete: () => {
          console.log("Complete");
        }
      });
    });
    
  }
  errMess!: string;
  
  onDeleteParticipant(id : number , index : number) {
    this.iswaiting[index] = true;
    this.participantserv.deleteParticipant(id).subscribe({
      next: (response) => {
        this.participantserv.getParticipantsByEvent(this.eventID).subscribe({
          next: (participants: Participant[]) => {
            this.Participants = participants;
            this.upper.UpperPlace(this.eventID);
            this.iswaiting[index] = false;
          },
          error: (errmess: string) => {
            this.Participants = [];
            this.errMess = errmess;
            this.iswaiting[index] = false ;
          },
          complete: () => {
            console.log("Complete");
          }
        });
  } ,
      error: (errmess: string) => {
        this.Participants = [];
        this.errMess = errmess;
        this.iswaiting[index] = false ;
      }
    });
  console.log("Participant Deleted");  


} 
}
