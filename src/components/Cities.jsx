import React from 'react'
import Card from './Card'

const Cities = ({ myCities }) => {

  return (
    <div>
      {
        myCities?.map( (c,i) => (
          <Card 
            key={i}
            min={c.min}
            max={c.max}
            temp={c.temp}
            name={c.name}
            weather={c.weather}
            dayTime={c.dayTime}
            country={c.country}
          />
        ))
      }
    </div>
  )
}

export default Cities