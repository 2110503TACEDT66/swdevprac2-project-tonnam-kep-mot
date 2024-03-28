"use client"
import { useState } from "react";
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
            const data = await addbooking(id,session?.user._id,bookingDate,session?.user.token)
    }
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Campground Booking</div>
            <FormControl className="w-fit space-y-5 p-[20px] bg-white rounded-2xl flex flex-col items-center">
                <div className='w-full bg-slate-100 rounded-2xl p-3'>
                    <TextField variant="standard" name='Name' label='Name' className="w-full" onChange={(event) => setName(event.target.value)}/>
                </div>
                <DateReserve onDateChange={(value:Dayjs) => {setBookingDate(dayjs(value).format())}}/>
                <button name="Book Vaccine" className=" w-fit block bg-sky-200 text-slate-900 p-[10px] rounded-lg hover:bg-sky-900 hover:text-white font-serif"onClick={makeReservation}>Book Campground</button>
            </FormControl>
        </main>
    );
}   