"use client"
import { useState } from "react";
import DateReserve from "@/components/DateReserve";
import { FormControl, TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import updateBooking from "@/libs/updateBooking";
import session from "redux-persist/lib/storage/session";
import Campground from "../(campinfo)/camp/page";
import { useSession } from "next-auth/react";
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
    console.log(session)
    console.log(id)
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
            const data = await updateBooking(id,session?.user.token,bookingDate)
    }
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Campground Date Edit</div>
            <FormControl className="w-fit space-y-5 p-[20px] bg-white rounded-2xl flex flex-col items-center">
                <DateReserve onDateChange={(value:Dayjs) => {setBookingDate(dayjs(value).format())}}/>
                <button name="Book Vaccine" className=" w-fit block bg-sky-200 text-slate-900 p-[10px] rounded-lg hover:bg-sky-900 hover:text-white font-serif"onClick={()=>{makeReservation();alert("edit successful");window.location.assign("/mybooking")}}>Edit Campground</button>
            </FormControl>
            <a href="/mybooking" className="text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-30 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif">Back to Booking List</a>
        </main>
    );
}   