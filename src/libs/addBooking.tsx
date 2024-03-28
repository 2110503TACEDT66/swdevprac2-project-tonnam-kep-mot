export default async function addbooking(cid: string,user:string, bookingDate:string, token:string ) {
    console.log({cid,user,bookingDate,token})
    const response = await fetch(`http://localhost:7777/api/v1/campgrounds/${cid}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDate:bookingDate,
            user:user,
            campground:cid
        }),
    })
    return await response.json()
}