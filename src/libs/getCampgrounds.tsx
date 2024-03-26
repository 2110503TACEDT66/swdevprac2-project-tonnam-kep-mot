import { resolve } from "path"

export default async function getCampgrounds() {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch("http://localhost:7777/api/v1/campgrounds")
    if(!response.ok){
        throw new Error("Failed to fecth campgrounds")
    }
    return await response.json()
}