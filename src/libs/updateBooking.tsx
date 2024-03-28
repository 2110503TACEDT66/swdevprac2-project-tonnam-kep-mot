export default async function updateBooking(id: string, token:string,bookingDate:string ) {
    const response = await fetch(`http://localhost:7777/api/v1/bookings/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDate:bookingDate
        }),
    })
    return await response.json()
}