"use client"
import {MenuItem, Select, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
            <Select variant="standard" name="camp" id="camp" className="h-[2em] w-[200px]">
            <MenuItem value="กระต่ายกินเนื้อ">กระต่ายกินเนื้อ ลานกางเต๊นท์</MenuItem>
                <MenuItem value="จูบติ๋มที่ริมบึง">จูบติ๋มที่ริมบึง</MenuItem>
                <MenuItem value="Lakeview">Lakeview Camping</MenuItem>
            </Select>
        </div>
    )
}