
import CampCatalog from "@/components/CampCatalog";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Campground() {
    const campgrounds = await getCampgrounds()
    console.log(campgrounds)
    return (
        <main className="text-center p-10">
            <h1 className="text-3xl font-medium font-serif">Our Campground List</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CampCatalog campsJson={campgrounds}/>
            </Suspense>
        </main>
    );
}