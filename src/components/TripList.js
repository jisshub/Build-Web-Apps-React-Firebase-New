import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './TripList.css';

export default function TripList() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(trips => {
            setTrips(trips);
        });
    }, []);
    console.log(trips); 

  return (
    <div>
      <h1>Trip List</h1>
      {
        trips.map(trip => (
            <ul className='trip-list'>
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            </ul>
        ))
      }
    </div>
  )
}
