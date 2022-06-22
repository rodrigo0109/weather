import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
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
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
