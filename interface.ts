interface CampItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface CampJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampItem[]
  }
  interface BookingItem{
    _id: string;
    bookingDate: string;
    user:string;
    campground:{name:string;address:string;tel:string}
    count:number
  }
  interface BookingJson{
    count:number
  }