export class Event {
      id : number ;
      title : string ;
      description : string ;
      Date : Date ;
      location : string ;
      numplaces : number ;
      price : number ;   
      category : string ;
      
      constructor(id : number , title : string , description : string , Date : Date , location : string , numplaces : number , price : number, category : string ) {
          this.category = category ;
          this.id = id ;
          this.title = title ;
          this.description = description ;
          this.Date = Date ;
          this.location = location ;
          this.numplaces = numplaces ;
          this.price = price ;
      }     
}


