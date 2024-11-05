import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Ticket {
    id: any;
    performance: string;
    seat_number: string;
    price: number;
    is_booked: boolean;
}

export function Theatre5() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [locked, setLocked] = useState<boolean>(false);
    const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
    const [isBookingConfirmed, setIsBookingConfirmed] = useState<boolean>(false); // Track if booking is confirmed

    // Define fetchTickets outside useEffect so it can be reused
    const fetchTickets = async () => {
        try {
            const response = await axios.get<Ticket[]>("http://127.0.0.1:8000/api/tickets/");
            setTickets(response.data);
            console.log("Fetched tickets:", response.data);
        } catch (error) {
            setError("Error fetching ticket data.");
            console.error("Error fetching ticket data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const handleSeatClick = (seat_number: string) => {
        if (!locked) {
            setSelectedSeats(prevSelected => {
                const newSelected = new Set(prevSelected);
                if (newSelected.has(seat_number)) {
                    newSelected.delete(seat_number);
                } else {
                    newSelected.add(seat_number);
                }
                return newSelected;
            });
        }
    };

    const handleConfirmBooking = async () => {
        const seatsToBook = tickets.filter(ticket => selectedSeats.has(ticket.seat_number));
    
        if (seatsToBook.length === 0) {
            alert("No tickets selected for booking.");
            return;
        }
    
        try {
            for (const ticket of seatsToBook) {
                await axios.put(`http://127.0.0.1:8000/api/tickets/${ticket.id}/`, {
                    performance: ticket.performance,
                    seat_number: ticket.seat_number,
                    price: ticket.price,
                    is_booked: true,
                });
            }

            alert("Booking confirmed!");
            setLocked(true);
            setSelectedSeats(new Set()); // Clear selected seats after booking
            setIsBookingConfirmed(true); // Mark booking as confirmed
            await fetchTickets();  // Refresh the seat data to reflect booked status
        } catch (error) {
            console.error("Error confirming booking:", error.response?.data || error.message);
            setError("Error confirming booking.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 h-full">
            <HeaderSuccess />
            <div className="max-w-lg mx-auto text-center pt-[75px]">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-200 to-rose-700 p-8 text-transparent bg-clip-text">
                    Screen-5 Booking
                </h2>
                <button
                    onClick={handleConfirmBooking}
                    className="mt-4 text-light text-rose-400"
                    disabled={locked}
                >
                    Confirm booking
                </button>
                <div className="grid grid-cols-5 gap-4">
                    {tickets.map(ticket => (
                        <div
                            key={ticket.seat_number}
                            onClick={() => handleSeatClick(ticket.seat_number)}
                            className={`p-4 border-2 rounded cursor-pointer transition duration-500
                                ${ticket.is_booked || selectedSeats.has(ticket.seat_number) 
                                    ? 'bg-gray-500 border-gray-700 text-gray-300 cursor-not-allowed' 
                                    : locked 
                                        ? 'bg-gray-300 border-gray-400 text-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-cyan-500 to-cyan-950 border-green-500 text-green-950 hover:bg-green-700'}`}
                        >
                            <p>{ticket.seat_number}</p>
                            <p>{ticket.is_booked ? 'Booked' : 'Available'}</p>
                            <p>Price: ${ticket.price}</p>
                        </div>
                    ))}
                </div>
                {isBookingConfirmed && (
                    <Link className="mt-4 block text-red-300 text-5xl font-semibold" to="/Theatre5Booked">
                        Continue
                    </Link>
                )}
            </div>
            <Footer />
        </div>
    );
}
