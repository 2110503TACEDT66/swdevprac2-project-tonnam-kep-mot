import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";

export default async function CampgroundDetailPage({ params }: { params: { cid: string } }) {
    const campgroundDetail = await getCampground(params.cid)

    return (
        <main className="text-center p-5 ">
            <h1 className="text-xl font-medium font-serif"></h1>
            <div className="flex flex-row my-10 justify-center">
                <Image src={campgroundDetail.data.picture}
                    alt='Campground Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]" />
                <div className="text-md mx-5 font-serif">
                    <div>{campgroundDetail.data.name}</div>
                    <div>{campgroundDetail.data.tel}</div>
                    <Link href={`/booking?id=${params.cid}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm my-4">
                            Make Booking
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
