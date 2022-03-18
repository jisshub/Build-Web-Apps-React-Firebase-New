import React from 'react'
import { useState } from 'react';
import  {useFetch}  from '../hooks/useFetch.js';
import './TripList.css';

export default function TripList() {

    const [url, setUrl] = useState('http://localhost:3000/trips');
    const {data: trips, isPending, error} = useFetch(url);

  return (
    <div className='trip-list'>
      <h1>Trip List</h1>
      {isPending && <p>Loading trips...</p>}
      {error && <p>{error}</p>}
      <ul>
      {trips && trips.map(trip =>  (
            <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>  
            </li>
          ))
        }
        </ul>
        <div className='filter'>
          <button onClick={() => setUrl('http://localhost:3000/trips?loc=india')}>Indian Trips</button>
          <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
        </div>
    </div>
  )
}
