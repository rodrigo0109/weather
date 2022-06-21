import React, { useEffect, useState } from 'react';
import Clear from '../images/day/113.png'
import CloudsDay from '../images/day/116.png'
import RainDay from '../images/day/263.png'
import FogDay from '../images/day/248.png'
import ClearNight from '../images/night/113.png'
import CloudsNight from '../images/night/119.png'
import RainNight from '../images/night/263.png'
import FogNight from '../images/night/248.png'

import bgClear from '../videos/day/clear.mp4'
import bgClouds from '../videos/day/clouds.mp4'
import bgRain from '../videos/day/rain.mp4'
import bgFog from '../videos/day/fog.mp4'

import bgClearNight from '../videos/night/clear_night.mp4'
import bgCloudsNight from '../videos/night/clouds_night.mp4'
import bgRainNight from '../videos/night/rain_night.mp4'
import bgFogNight from '../videos/night/fog_night.mp4'
import './Card.css';

export default function Card({ country, dayTime, timezone, time, sunrise, sunset, weather, temp, min, max, name, img, onClose, id, setMyCities, myCities }) {

  const [icon, setIcon] = useState()
  const [bg, setBg] = useState()

  //console.log(dayTime)

  useEffect(() => {
    handleIcon(dayTime, weather)
  }, [])

  const handleFav = () => {
    setMyCities([
      ...myCities,
      {
        min:min,
        max:max,
        temp:temp,
        name:name,
        weather:weather,
        dayTime:dayTime,
        country:country
      }
    ])
  }

  /////// CURRENT /////////////
  /* let currentValue = time + (timezone)
  let currentTime = new Date(currentValue * 1000)
  let utc = currentTime.toUTCString().slice(-12, -4)
  console.log(utc)
  /////// SUNRISE /////////////
  let sunriseValue = sunrise + (timezone)
  let sunriseDate = new Date(sunriseValue * 1000)
  let utcSunrise = sunriseDate.toUTCString().slice(-12, -4)
  console.log(utcSunrise)
  /////// SUNSET /////////////
  let sunsetValue = sunset + (timezone)
  let sunsetDate = new Date(sunsetValue * 1000)
  let utcSunset = sunsetDate.toUTCString().slice(-12, -4)
  console.log(utcSunset) */

  const handleIcon = (dayTime, weather) => {
    if (dayTime === 'dia') {
      if (weather === 'Clear') { setIcon(Clear); setBg(bgClear) }
      if (weather === 'Clouds') { setIcon(CloudsDay); setBg(bgClouds) }
      if (weather === 'Rain') { setIcon(RainDay); setBg(bgRain) }
      if (weather === 'Fog') { setIcon(FogDay); setBg(bgFog) }
      if (weather === 'Haze') { setIcon(FogDay); setBg(bgFog) }
    }
    else if (dayTime === 'noche') {
      if (weather === 'Clear') { setIcon(ClearNight); setBg(bgClearNight) }
      if (weather === 'Clouds') { setIcon(CloudsNight); setBg(bgCloudsNight) }
      if (weather === 'Rain') { setIcon(RainNight); setBg(bgRainNight) }
      if (weather === 'Fog') { setIcon(FogNight); setBg(bgFogNight) }
      if (weather === 'Haze') { setIcon(FogNight); setBg(bgFogNight) }
    }
  }

  console.log(icon)

  return (
    <div className='card'>
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="close_icon">
        <button onClick={handleFav} className="save"><span className="material-symbols-outlined icon">
          bookmark
        </span></button>
        <button onClick={onClose} className="closed"><span className="material-symbols-outlined icon">
          close
        </span></button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{name},{country}</h3>
        <h1 className="card-temp">{`${Math.round(temp)}°`}</h1>
        <div className='weather'>
          <h3>{weather}</h3>
        </div>
        <div className="data">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={icon} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
