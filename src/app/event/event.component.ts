import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../shared/event';
import { BaseURL } from '../shared/base-url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  constructor(private router:Router) { }
  @Input() event : Event 
  @Output() eventSelected: EventEmitter<number> = new EventEmitter<number>();
  open = false;
  baserurl = BaseURL;
  test : boolean = false;
  toggle() {
    this.open = !this.open;
  } 

  seemorevent() { 
    this.test = !this.test;
  }
  GotoParticipate() {
    this.eventSelected.emit(this.event.id);
  }

  isFullPlace(){
    if(this.event.numplaces == 0){
      return true;
    }
    else{
      return false;
    }
  }
}
