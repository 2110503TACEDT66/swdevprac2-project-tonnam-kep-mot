'use client'
import { useReducer, useRef } from "react";
import ProductCard from '@/components/Card'
export default function CardPanel() {

    const countRef =useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const compareReducer = (compareList:Map<string, number>, action:{type:string, campName:string, rating:number}) => {
        switch(action.type) {
            case 'add' : {
                return new Map(compareList.set(action.campName, action.rating || 0))
            }
            case 'remove' : {
                compareList.delete(action.campName)
                return new Map(compareList)
            }
            default: return compareList
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map([
        ['กระต่ายกินเนื้อ ลานกางเต๊นท์', 5],
        ['จูบติ๋มที่ริมบึง', 5],
        ['Lakeview Camping', 5],
        ]))
    const mockCampRepo = [
        {cid: "001", name: "กระต่ายกินเนื้อ ลานกางเต๊นท์", image: "/img/camp1.jpg"},
        {cid: "002", name: "จูบติ๋มที่ริมบึง", image: "/img/camp2.jpg"},
        {cid: "003", name: "Lakeview Camping", image: "/img/camp3.jpg"},
    ]
    return (
        <div>
            <div style={{
                margin: "20px", display: "flex",
                flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap", padding: "10px"
            }}>
                {
                    mockCampRepo.map((campItem) => (
                        <a key={campItem.cid} href={`/camp/${campItem.cid}`} className="w-1/6">
                            <ProductCard campName={campItem.name} imgSrc={campItem.image} onCompare={(Camp:string, Rating:number) => dispatchCompare({type:'add', campName:Camp, rating:Rating})}/>
                        </a>
                    ))
                }
            </div>
            {Array.from(compareList).map(([Camp, Rating]) => <div className='w-fit bg-white text-black p-2 m-2 rounded-lg font-serif' key={Camp} data-testid={Camp} onClick={() => dispatchCompare({type:'remove', campName:Camp, rating:Rating})}>{Camp} : {Rating}</div>)}
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={()=>{countRef.current=countRef.current+1; alert(countRef.current)}}>
                    Count with Ref variable
            </button>

            <input type="text" placeholder="Please fill" className="block text-gray-900 text-sm rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-insert ring-purple-400 focus:outline-none focus:bg-purple-200 focus:ring-2"
            ref = {inputRef}/>
             
        </div>
    )
}