import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '../../actions/actions';
import './Cities.css';

const Cities = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useSelector(state => state.cities)

  const handleNext = () => {
    if (state.length <= currentPage + 3) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 3);
      setPage(page + 1);
    }
  }

  const handlePrev = () => {
    if (currentPage < 3) {
      setCurrentPage(0);
      setPage(1);
    } else {
      setCurrentPage(currentPage - 3);
      setPage(page - 1);
    }
  }

  const countries = state.slice(currentPage, currentPage + 3);

  return (
    <div className='cities_container'>
      <h1 className='cities_title'>Keep your favourites cities!</h1>

      <div className='btn_direct_container_cities'>
        <div className='pag_cities'>
          <button className='pag_prev_cities' onClick={handlePrev}><span className="material-symbols-outlined">
            arrow_back_ios
          </span></button>
          <p>{page}/{Math.ceil(state.length / 3)}</p>
          <button className='pag_next_cities' onClick={handleNext}><span className="material-symbols-outlined">
            arrow_forward_ios
          </span></button>
        </div>
      </div>
      <div className='cities_cards'>
        {
          countries?.map((c, i) => (
            <Card
              id={c.id}
              key={i}
              min={c.min}
              max={c.max}
              temp={c.temp}
              name={c.name}
              weather={c.weather}
              dayTime={c.dayTime}
              country={c.country}
              fav={true}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Cities