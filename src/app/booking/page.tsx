"use client"
import { useState } from "react";
import DateReserve from "@/components/DateReserve";
import { FormControl, TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
export default function Booking() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [citizenId, setCitizenId] = useState('')
    const [location, setLocation] = useState<string>('chula')
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)
    const dispatch = useDispatch<AppDispatch>()
    const makeBooking = () => {
        if (name && lastname && citizenId && location && bookingDate) {
            const booking: BookingItem = {
                name: name,
                surname: lastname,
                id: citizenId,
                campground: location,
                bookDate: dayjs(bookingDate).format("MM-DD-YYYY"),
            }
            dispatch(addBooking(booking))
        }
    }
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Campground Booking</div>
            <FormControl className="w-fit space-y-5 p-[20px] bg-white rounded-2xl flex flex-col items-center">
                <div className='w-full bg-slate-100 rounded-2xl p-3'>
                    <TextField variant="standard" name='Name' label='Name' className="w-full" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='w-full bg-slate-100 rounded-2xl p-3'>
                    <TextField variant="standard" name='Lastname' label='Lastname' className="w-full" onChange={(event) => setLastname(event.target.value)}/>
                </div>
                <div className='w-full bg-slate-100 rounded-2xl p-3'>
                    <TextField variant="standard" name='Citizen ID' label='Citizen ID' className="w-full" onChange={(event) => setCitizenId(event.target.value)}/>
                </div>
                <DateReserve onDateChange={(value:Dayjs) => {setBookingDate(value)}}
                onLocationChange={(value:string) => {setLocation(value)}}/>
                <button name="Book Vaccine" className=" w-fit block bg-sky-200 text-slate-900 p-[10px] rounded-lg hover:bg-sky-900 hover:text-white font-serif" onClick={makeBooking}>Book Campground</button>
            </FormControl>
        </main>
    );
}   