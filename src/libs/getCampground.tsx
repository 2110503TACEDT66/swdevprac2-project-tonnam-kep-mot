export default async function getCampground(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`)
    if(!response.ok){
        throw new Error("Failed to fecth campgrounds")
    }
    return await response.json()
}