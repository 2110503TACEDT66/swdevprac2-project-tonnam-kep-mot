"use client"
import { Dayjs } from "dayjs"
import {MenuItem, Select, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"

export default function DateReserve({onDateChange, onLocationChange} 
    :{onDateChange: Function, onLocationChange: Function}){
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('BKK')
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" 
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
            <Select variant="standard" name="campground" id="campgroound" 
            value={location}
            onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}}
            className="h-[2em] w-[200px]">
            <MenuItem value="กระต่ายกินเนื้อ">กระต่ายกินเนื้อ ลานกางเต๊นท์</MenuItem>
            <MenuItem value="จูบติ๋มที่ริมบึง">จูบติ๋มที่ริมบึง</MenuItem>
            <MenuItem value="Lakeview">Lakeview Camping</MenuItem>
            </Select>
        </div>
    )
}