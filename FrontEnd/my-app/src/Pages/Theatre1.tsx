import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

interface Ticket {
    performance: number;
    seat_number: string;
    price: string; // Updated price to string
    is_booked: boolean;
}

export function Theatre1() {
    // State to store ticket information
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [locked, setLocked] = useState<boolean>(false); // To lock the tickets after booking

    // Fetch ticket data from the API
    useEffect(() => {
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

        fetchTickets();
    }, []);

    // Handle seat click to book or unbook the seat
    const handleSeatClick = (ticketId: number) => {
        if (!locked) {
            setTickets(tickets.map(ticket =>
                ticket.seat_number === tickets[ticketId].seat_number && !ticket.is_booked
                    ? { ...ticket, is_booked: true }
                    : ticket
            ));
        }
    };

    // Confirm booking and lock the seats
    // Confirm booking and lock the seats
const handleConfirmBooking = async () => {
    // Collect booked tickets into an array
    const bookedTickets = tickets.filter(ticket => ticket.is_booked);

    try {
        // Loop through each booked ticket and send a POST request
        for (const ticket of bookedTickets) {
            const response = await axios.post("http://127.0.0.1:8000/api/tickets/", {
                performance: 1, // Use the actual performance ID here
                seat_number: ticket.seat_number,
                price: ticket.price,
                is_booked: true, // This should be true as we are booking it now
            });
        }

        alert("Booking confirmed!");
        setLocked(true); // Lock the seats after confirming
    } catch (error) {
        console.error("Error confirming booking:", error.response?.data || error.message);
        setError("Error confirming booking.");
    }
};

    // Show loading or error messages
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 h-svh">
            <HeaderSuccess />
            <div className="max-w-lg mx-auto text-center pt-[75px]">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-200 to-rose-700 p-8 text-transparent bg-clip-text">
                    Screen-1 Booking
                </h2>
                <div className="grid grid-cols-5 gap-4">
                    {tickets.map((ticket, index) => (
                        <div
                            key={index} // Using index as key for simplicity
                            onClick={() => handleSeatClick(index)}
                            className={`p-4 border-2 rounded cursor-pointer transition duration-500
                                ${ticket.is_booked ? 'bg-gray-500 border-gray-700 text-gray-300 cursor-not-allowed' :
                                locked ? 'bg-gray-300 border-gray-400 text-gray-400 cursor-not-allowed' :
                                'bg-gradient-to-r from-cyan-500 to-cyan-950 border-green-500 text-green-950 hover:bg-green-700'}`}
                        >
                            <p>{ticket.seat_number}</p>
                            <p>{ticket.is_booked ? 'Booked' : 'Available'}</p>
                            <p>Price: ${ticket.price}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleConfirmBooking}
                    className="mt-4 text-light text-rose-400"
                    disabled={locked} // Disable the confirm button if tickets are locked
                >
                    Confirm booking
                </button>
            </div>
            <Footer />
        </div>
    );
}
