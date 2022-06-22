import React, { useState } from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (cities.length <= currentPage + 5) {
        setCurrentPage(currentPage);
    } else {
        setCurrentPage(currentPage + 5);
        //setPage(page + 1)
    }
}

const handlePrev = () => {
    if (currentPage < 5) {
        setCurrentPage(0);
        //setPage(1)
    } else {
        setCurrentPage(currentPage - 5);
        //setPage(page - 1)
    }
}

const countries = cities.slice(currentPage, currentPage + 5)

  if (cities) {
    return (
      <div className='cards'>
        {
          cities.length > 5 &&
          <div className='btn_direct_container'>
            <button className='pag_prev' onClick={handlePrev}>PREV</button>
            {/* <p>{page}/{Math.round(state.length / 10)}</p> */}
            <button className='pag_next' onClick={handleNext}>NEXT</button>
          </div>
        }

        {countries.map(c => <Card
          weather={c.weather}
          temp={c.temp}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          key={c.id}
          time={c.time}
          sunrise={c.sunrise}
          sunset={c.sunset}
          timezone={c.timezone}
          dayTime={c.dayTime}
          country={c.country}
        />)}
      </div>
    );
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
}
