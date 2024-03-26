export default async function addBooking(id: string,user:string, campground:string, bookingDate:string, token:string) {
    const response = await fetch(`http://localhost:7777/api/v1/campgrounds/${id}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDate:bookingDate,
            campground:campground,
            user:user
        }),
    })
    if (!response.ok) {
        throw new Error("Failed to fetch cars")
    }
    return await response.json()
}