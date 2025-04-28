export class Participant {
      id : number ;
      name : string ;
      email : string ;
      phone : string ;
      eventId : number ;
      constructor(id : number , name : string , email : string , phone : string , eventId : number ) {
          this.id = id ;
          this.name = name ;
          this.email = email ;
          this.phone = phone ;
          this.eventId = eventId ;
      }
}
