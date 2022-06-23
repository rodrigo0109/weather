import React, { useEffect, useState } from 'react';
import Clear from '../../images/day/113.png';
import CloudsDay from '../../images/day/116.png';
import RainDay from '../../images/day/263.png';
import DrizzleDay from '../../images/day/293.png';
import SnowDay from '../../images/day/338.png';
import FogDay from '../../images/day/248.png';
import ClearNight from '../../images/night/113.png';
import CloudsNight from '../../images/night/119.png';
import RainNight from '../../images/night/263.png';
import FogNight from '../../images/night/248.png';

import bgClear from '../../videos/day/clear.mp4';
import bgClouds from '../../videos/day/clouds.mp4';
import bgRain from '../../videos/day/rain.mp4';
import bgDrizzle from '../../videos/day/drizzle.mp4';
import bgSnow from '../../videos/day/snow.mp4';
import bgFog from '../../videos/day/fog.mp4';

import bgClearNight from '../../videos/night/clear_night.mp4';
import bgCloudsNight from '../../videos/night/clouds_night.mp4';
import bgRainNight from '../../videos/night/rain_night.mp4';
import bgFogNight from '../../videos/night/fog_night.mp4';
import bgSnowNight from '../../videos/night/snow-night.mp4';
import './Card.css';
import { deleteCity, getAllCities, saveCity } from '../../actions/actions';
import { useDispatch } from 'react-redux';

export default function Card({ country, dayTime, weather, temp, min, max, name, onClose, fav }) {

  const [icon, setIcon] = useState();
  const [bg, setBg] = useState();

  useEffect(() => {
    handleIcon(dayTime, weather);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const handleFav = () => {
    dispatch( saveCity( {
      min: min,
      max: max,
      temp: Math.round(temp),
      name: name,
      weather: weather,
      dayTime: dayTime,
      country: country,
    } ) )
  };

  const handleDeleteCity = async(name) => {
    await dispatch( deleteCity({ name: name }) );
    dispatch( getAllCities() );
  };

  const handleClose = () => {
    onClose();
  };

  const handleIcon = (dayTime, weather) => {
    if (dayTime === 'dia') {
      if (weather === 'Clear') { setIcon(Clear); setBg(bgClear) }
      if (weather === 'Clouds') { setIcon(CloudsDay); setBg(bgClouds) }
      if (weather === 'Rain') { setIcon(RainDay); setBg(bgRain) }
      if (weather === 'Drizzle') { setIcon(DrizzleDay); setBg(bgDrizzle) }
      if (weather === 'Snow') { setIcon(SnowDay); setBg(bgSnow) }
      if (weather === 'Fog' || weather === 'Haze' || weather === 'Mist' ) { setIcon(FogDay); setBg(bgFog) }
      //if (weather === 'Haze') { setIcon(FogDay); setBg(bgFog) }
    }
    else if (dayTime === 'noche') {
      if (weather === 'Clear') { setIcon(ClearNight); setBg(bgClearNight) }
      if (weather === 'Clouds') { setIcon(CloudsNight); setBg(bgCloudsNight) }
      if (weather === 'Rain') { setIcon(RainNight); setBg(bgRainNight) }
      if (weather === 'Drizzle') { setIcon(RainNight); setBg(bgRainNight) }
      if (weather === 'Snow') { setIcon(SnowDay); setBg(bgSnowNight) }
      if (weather === 'Fog' || weather === 'Haze' || weather === 'Mist') { setIcon(FogNight); setBg(bgFogNight) }
      //if (weather === 'Haze') { setIcon(FogNight); setBg(bgFogNight) }
    }
  };

  return (
    <div className='card'>
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="close_icon">
        {
          !fav &&
          <button onClick={handleFav} className="save"><span className="material-symbols-outlined icon">
            bookmark
          </span></button>
        }
        {
          !fav &&
          <button onClick={handleClose} className="closed"><span className="material-symbols-outlined icon">
            close
          </span></button>
        }
        {
          fav &&
          <button onClick={() => handleDeleteCity(name)} className="close_city"><span className="material-symbols-outlined icon">
            close
          </span></button>
        }
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
