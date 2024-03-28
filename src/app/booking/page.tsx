"use client"
import { useState,useEffect } from "react";
import DateReserve from "@/components/DateReserve";
import { FormControl, TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import updateBooking from "@/libs/addbooking";
import session from "redux-persist/lib/storage/session";
import Campground from "../(campinfo)/camp/page";
import addbooking from "@/libs/addbooking";
import { useSession } from "next-auth/react";
import getBookings from "@/libs/getBookings";
export default function Booking() {
    const { data:session } = useSession();
    const [name, setName] = useState('')
    const [location, setLocation] = useState<string>('')
    const [bookingDate, setBookingDate] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const url_string = window.location.href
    const url = new URL(url_string)
    const id = url.searchParams.get("id")
    if(!id || !session ){
        return null;
    }
    const[bookResponse,setBookResponse] = useState<number>()
    useEffect(()=>{
        const fetchData = async () => {
            const book = await getBookings(session?.user.token)
            console.log(book)
            setBookResponse(book.count)
        }
        fetchData()
    },[])
    console.log(bookResponse)
    if(!bookResponse) return 0;
    // const makeBooking = () => {
    //     if (name  && location && bookingDate) {
    //         const booking: BookingItem = {
    //             name: name,
    //             surname: lastname,
    //             id: citizenId,
    //             campground: location,
    //             bookDate: dayjs(bookingDate).format("MM-DD-YYYY"),
    //         }
    //         console.log(booking)
    //         dispatch(addBooking(booking))
    //     }
    // }
    const makeReservation = async () => {
            const data = await addbooking(id,session?.user._id,bookingDate,session?.user.token)
            
    }
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Campground Booking</div>
            <FormControl className="w-fit space-y-5 p-[20px] bg-white rounded-2xl flex flex-col items-center">
                <DateReserve onDateChange={(value:Dayjs) => {setBookingDate(dayjs(value).format())}}/>
                <button name="Book Vaccine" className=" w-fit block bg-sky-200 text-slate-900 p-[10px] rounded-lg hover:bg-sky-900 hover:text-white font-serif"onClick={()=>{makeReservation();
                {
                            if(session.user.role=="user"&& bookResponse>=3){
                                console.log()
                                alert("already has 3 bookings you can not booking anymore")
                            }else{
                                alert("booking successful")
                            }
                        };
                        window.location.assign("/mybooking")}}>
        Book Campground</button>
            </FormControl>
            <a href="/camp" className="text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-30 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif">Back to our campgrounds</a>
        </main>
    );
}   