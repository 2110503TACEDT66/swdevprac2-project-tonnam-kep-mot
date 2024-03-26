export default async function getCampground(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch(`http://localhost:7777/api/v1/campgrounds/${id}`)
    if(!response.ok){
        throw new Error("Failed to fecth campgrounds")
    }
    return await response.json()
}