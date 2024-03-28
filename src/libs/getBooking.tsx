export default async function getBooking(id: string,token:string ) {
    const response = await fetch(`http://localhost:7777/api/v1/bookings/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return await response.json()
}