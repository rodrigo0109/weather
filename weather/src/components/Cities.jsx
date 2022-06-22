import React from 'react'
import { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '../actions/actions';
import './Cities.css'

const Cities = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getAllCities() )
  }, [])
  
  const state = useSelector( state => state.cities )
  //console.log(state)
  return (
    <div className='cities_container'>
      {
        state?.map( (c,i) => (
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
  )
}

export default Cities