
import CampCatalog from "@/components/CampCatalog";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Campground() {
    const campgrounds = getCampgrounds()
    return (
        <main className="text-center p-10">
            <h1 className="text-3xl font-medium font-serif">Our Campground List</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CampCatalog campsJson={campgrounds}/>
            </Suspense>
            <hr className="my-10"/>
            <h1 className="text-xl font-medium">TRY Client-Side Campground Panel</h1>
        </main>
    );
}