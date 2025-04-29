import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseURL } from '../shared/base-url';
import { Participant } from '../shared/participant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  public BaseURL = BaseURL+'participants/';
  constructor(private router:Router , private http : HttpClient) { }
  getParticipants():Observable<Participant[]>{
    return this.http.get<Participant[]>(this.BaseURL);
  }
  getParticipant(id: number): Observable<Participant> {
    return this.http.get<Participant>(this.BaseURL + id);
  } 
  addParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.BaseURL, participant);
  }
  updateParticipant(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(this.BaseURL + participant.id, participant);
  }
  deleteParticipant(id: number): Observable<void> {
    return this.http.delete<void>(this.BaseURL + id);
  }
  getParticipantsByEvent(eventID: number): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.BaseURL + '?eventID=' + eventID);
  }
}
