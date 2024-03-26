import Image from "next/image";

export default function CampDetailPage({params} : {params: {cid:string}}) {
    
    const mockCampRepo = new Map()
    mockCampRepo.set("001", {name: "กระต่ายกินเนื้อ ลานกางเต๊นท์", image: "/img/camp1.jpg"})
    mockCampRepo.set("002", {name: "จูบติ๋มที่ริมบึง", image: "/img/camp2.jpg"})
    mockCampRepo.set("003", {name: "Lakeview Camping", image: "/img/camp3.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium font-serif">Camp ID {params.cid}</h1>
            <div className="flex flex-row my-10 justify-center">
                <Image src={(mockCampRepo.get(params.cid)).image}
                    alt='Camp Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 font-serif">{(mockCampRepo.get(params.cid)).name}</div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{cid:"001"}, {cid:"002"}, {cid:"003"}]
}