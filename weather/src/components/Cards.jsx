import React, { useState } from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {

  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (cities.length <= currentPage + 5) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 5);
      setPage(page + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage < 5) {
      setCurrentPage(0);
      setPage(1)
    } else {
      setCurrentPage(currentPage - 5);
      setPage(page - 1)
    }
  }

  const countries = cities.slice(currentPage, currentPage + 5)

  if (cities) {
    return (
      <div className='cards'>


        <div className='btn_direct_container'>
          <div className='pag'>
              <button className='pag_prev' onClick={handlePrev}><span className="material-symbols-outlined">
                arrow_back_ios
              </span></button>
                <p>{page}/{cities.length > currentPage + 5 ? page + 1 : page}</p>
              <button className='pag_next' onClick={handleNext}><span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
          </div>
        </div>


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
