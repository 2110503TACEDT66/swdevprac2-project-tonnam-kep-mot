"use client"
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList () {
    const bookItem = useAppSelector( (state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if (bookItem.length == 0) return (
        <div className="p-10 flex flex-row justify-center">
            <div className="p-3 font-serif text-4xl bg-white text-sky-900 rounded-2xl">
                No Campground Booking
            </div>
        </div>
    )

    return (
        <> 
            {
                bookItem.map((bookingItem) => (
                    <div className="bg-white rounded-2xl px-5 mx-5 py-5 my-2 text-black space-y-1 font-serif" key={bookingItem.id}>
                        <div className="text-xl">{bookingItem.name} {bookingItem.surname}</div>
                        <div className="text-sm">Citizen ID : {bookingItem.id}</div>
                        <div className="text-sm">Campground : {bookingItem.campground}</div>
                        <div className="text-md">Booking Date : {bookingItem.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-sky-900 px-3 py-2 text-white shadow-sm" onClick={() => dispatch(removeBooking(bookingItem.id))}>
                            Remove Booking
                        </button>   
                    </div>
                ))
            }
        </>
    );
}