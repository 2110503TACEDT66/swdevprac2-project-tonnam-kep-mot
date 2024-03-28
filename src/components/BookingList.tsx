"use client"
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import { useEffect, useState } from "react";
import getBookings from "@/libs/getBookings";
import { useSession } from "next-auth/react";
import deleteBooking from "@/libs/deleteBooking"

export default function BookingList () {
    const { data:session } = useSession();
    if( !session ){
        return null;
    }
    const[bookResponse,setBookResponse] = useState<BookingItem[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            const book = await getBookings(session?.user.token)
            setBookResponse(book.data)
        }
        fetchData()
    },[])
    return (
        <> 
            {
                bookResponse.map((bookingItem) => (
                    <div className="bg-white rounded-2xl px-5 mx-5 py-5 my-2 text-black space-y-1 font-serif" key={bookingItem._id}>
                        <div className="text-xl">{bookingItem.user}</div>
                        <div className="text-sm">Campground : {bookingItem.campground.name}</div>
                        <div className="text-sm">tel : {bookingItem.campground.tel}</div>
                        <div className="text-sm">address : {bookingItem.campground.address}</div>
                        <div className="text-md">Booking Date : {bookingItem.bookingDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-sky-900 px-3 py-2 text-white shadow-sm" onClick={() => {deleteBooking(bookingItem._id,session.user.token);window.location.assign("/mybooking")}}>
                            Remove Booking
                        </button> 
                        <button className="block rounded-md bg-sky-600 hover:bg-sky-900 px-3 py-2 text-white shadow-sm" onClick={() => {window.location.assign(`/Edit?id=${bookingItem._id}`)}}>
                            Edit Booking
                        </button>    
                    </div>
                ))
            }
        </>
    );
}