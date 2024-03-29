import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";

export default async function CampgroundDetailPage({ params }: { params: { cid: string } }) {
    const campgroundDetail = await getCampground(params.cid)

    return (
        <main className="p-5 ">
            <h1 className="text-xl font-medium font-serif"></h1>
            <div className="flex flex-row my-10 justify-center">
                <Image src={campgroundDetail.data.picture}
                    alt='Campground Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]" />
                <div className="text-md mx-5 font-serif">
                    <div>name : {campgroundDetail.data.name}</div>
                    <div>address : {campgroundDetail.data.address}</div>
                    <div>phone : {campgroundDetail.data.tel}</div>
                        <a href={`/booking?id=${params.cid}`}className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm my-4">
                            Make Booking
                        </a>
                </div>
            </div>
            <a href="/camp" className="text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-30 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif">Back to our campgrounds</a>
        </main>
    );
}
