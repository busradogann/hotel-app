import React, { useState } from 'react'

export default function AddHotel() {
  const [hotel, setHotel] = useState('');

  const addHotel = (e) => {
    e.preventDefault();
    const name = document.querySelector('.otel-name').value;
    const rating = document.querySelector('.otel-rating').value;
    setHotel(name && rating);

    var hotels = JSON.parse(localStorage.getItem("hotel"));

    if(hotels != null ) {
      hotels.push([name, rating])
    } else {
      hotels = []
    }
   
    localStorage.setItem('hotel', JSON.stringify(hotels));

    document.querySelector('.add-hotel').style.backgroundColor = '#49ad91';
    document.querySelector('.add-hotel').innerHTML = 'Added';
  };

  return (
    <div className='grid place-content-center p-6'>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={addHotel}>
          <div className="form-group mb-6">
            <input type="text" className="otel-name form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              mb-4
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
              placeholder="Name" />

            <input type="text" className="otel-rating form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Rating" />
          </div>

          <button type="submit" className="add-hotel
            w-full
            px-6
            py-2.5
            bg-cyan-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-cyan-700 hover:shadow-lg
            focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-cyan-700 active:shadow-lg
            transition
            duration-150
            ease-in-out">Add Hotel</button>
        </form>
      </div>
    </div>
  )
}
