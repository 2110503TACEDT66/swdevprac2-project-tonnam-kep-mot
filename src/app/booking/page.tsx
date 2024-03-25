import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function Booking() {
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">CampGround Booking</div>

            <TextField id="UserName" label="Username" variant="standard" />
            <TextField id="PassWord" label="Password" variant="standard" />

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
            </div>

            <DateReserve/>
            
            <button name="Book CampGround" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow">Book CampGround</button>

        </main>
    );
}