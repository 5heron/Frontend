import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';

interface Show {
  title: string;
  description: string;
  genre: string;
  age_rating: string;
  duration_minutes: number;
}

export function Test(): React.ReactElement {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchShows();
    }, []);

    const fetchShows = async (): Promise<void> => {
        try {
            const response = await axios.get<Show[]>('http://127.0.0.1:8000/api/shows/');
            setShows(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
            <Header/>
            <div className="flex flex-col gap-y-10 py-24">
                {shows.map((show: Show) => (
                    <div key={show.title} className="card bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{show.title}</h2>
                            <p className="mb-4">{show.description}</p>
                            <p className="mb-2">Genre: {show.genre}</p>
                            <p>Age Rating: {show.age_rating}</p>
                            <p>Duration: {show.duration_minutes} minutes</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}
