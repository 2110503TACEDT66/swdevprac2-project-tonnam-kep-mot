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
    name: string;
    surname: string;
    id: string;
    bookDate: string;
  }