import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";
import { useState } from "react";

const totalSeats = 10;

export function Theatre5() {
    // Initialize seat state
    const [seats, setSeats] = useState(Array.from({ length: totalSeats }, (_, index) => ({
        id: index,
        isBooked: false,
    })));

    // Handle seat click
    const handleSeatClick = (seatId: number) => {
        setSeats(seats.map(seat =>
            seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
        ));
    };

    return (
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 h-svh">
            <HeaderSuccess />
            <div className="max-w-lg mx-auto text-center pt-[75px]">
                <h2 className="text-2xl font-bold mb-4  bg-gradient-to-r from-green-200 to-rose-700 p-8 text-transparent bg-clip-text">Screen-5 Booking</h2>
                <div className="grid grid-cols-5 gap-4">
                    {seats.map(seat => (
                        <div
                            key={seat.id}
                            onClick={() => handleSeatClick(seat.id)}
                            className={`p-4 border-2 rounded cursor-pointer transition duration-500 
                                ${seat.isBooked ? 'bg-gradient-to-r from-red-700 to-rose-950 border-red-700 text-rose-400' : 'bg-gradient-to-r from-cyan-500 to-cyan-950 border-green-500 text-green-950 hover:bg-green-700'}`}
                        >
                            {seat.isBooked ? 'Booked' : 'Available'}
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-light text-rose-400">
                    Click on a seat to book/unbook it.
                </p>
            </div>
            <Footer />
        </div>
    );
}

