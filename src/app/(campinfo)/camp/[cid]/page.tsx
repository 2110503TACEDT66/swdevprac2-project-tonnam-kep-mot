import Image from "next/image";
import getCampground from "@/libs/getCampground";

export default async function CampDetailPage({params} : {params: {cid:string}}) {
    const campDetail = await getCampground(params.cid)

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium font-serif">{campDetail.data.model}</h1>
            <div className="flex flex-row my-10 justify-center">
                <Image src={campDetail.data.picture}
                    alt='Camp Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 font-serif">{campDetail.data.name}</div>
                <div>{campDetail.data.tel}</div>
            </div>
        </main>
    );
}
