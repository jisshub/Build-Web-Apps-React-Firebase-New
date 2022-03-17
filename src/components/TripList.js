import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './TripList.css';

export default function TripList() {

    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips');

    const fetchTrips = useCallback(async() => {
        const response = await fetch(url);
        const data = await response.json();
        setTrips(data);
    }, [url])

    useEffect(() => {
        fetchTrips();
    }, [fetchTrips]);
    console.log(trips); 
    
  return (
    <div className='trip-list'>
      <h1>Trip List</h1>
      {
        trips.map(trip =>  (
            <ul>
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>  
                </li>
            </ul>
                ))
            }
            <div className='filter'>
              <button onClick={() => setUrl('http://localhost:3000/trips?loc=india')}>Indian Trips</button>
              <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
    </div>
  )
}
