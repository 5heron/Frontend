import React from 'react';

const Card1 = ({ show }) => {
    return (
        <div className="card">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{show.title}</h2>
                <p className="mb-4">{show.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
            </div>
        </div>
    );
};

export default Card1;

// Other card components (Card2, Card3, etc.) should be updated similarly
