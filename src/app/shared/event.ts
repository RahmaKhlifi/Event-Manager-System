export class Event {
      id : number ;
      adminID : number ;
      title : string ;
      description : string ;
      Date : string ;
      location : string ;
      numplaces : number ;
      price : number ;   
      category : string ;
      image : string ;
      organizor : string ;
      
      constructor(id : number ,adminID : number, title : string , description : string , Date : string , location : string , numplaces : number , price : number, category : string , image : string ,organizor:string) {
          this.image = image ;
          this.adminID = adminID ;
          this.category = category ;
          this.id = id ;
          this.title = title ;
          this.description = description ;
          this.Date = Date ;
          this.location = location ;
          this.numplaces = numplaces ;
          this.price = price ;
          this.organizor=organizor;
      }     
}


