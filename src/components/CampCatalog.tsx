
import Link from "next/link";
import Card from "./Card";

export default async function CampCatalog({ campsJson }: { campsJson:CampJson}) {
    const campJsonReady = await campsJson
    return (
        <>
            Explore {campJsonReady.count} campgrounds in our catalog
            <div style={{
                margin: "20px", display: "flex",
                flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap", padding: "10px"
            }}>
                {
                    campJsonReady.data.map((campItem: CampItem) => (
                        <Link href={`/camp/${campItem.id}`} className="w-1/5">
                            <Card campName={campItem.name} imgSrc={campItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}