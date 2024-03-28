"use client"
import BookingList from "@/components/BookingList";

export default function CartPage () {
    return (
        <main>
            <BookingList></BookingList>
            <a href="/camp" className="text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-30 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif">Back to our campgrounds</a>
        </main>
    );
}