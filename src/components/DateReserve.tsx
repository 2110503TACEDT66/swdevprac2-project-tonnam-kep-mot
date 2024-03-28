"use client"
import { Dayjs } from "dayjs"
import {MenuItem, Select, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"

export default function DateReserve({onDateChange} 
    :{onDateChange: Function}){
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('BKK')
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" 
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    )
}