import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Cards from "../components/Card1";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import axios from 'axios';

export function BookingPage(){
    
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchShows();
    }, []);

    const fetchShows = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shows/');
            console.log('API Response:', response.data); // Add this line
            setShows(response.data);
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    }

    return (
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
            <Header/>
            <div className="flex flex-col gap-y-10 py-24">
                {shows.map(show => (
                    <Link key={show.title} to="/login">
                        <Card1 show={show}/>
                    </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}
