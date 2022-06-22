import React, { useState } from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Cities from './components/Cities';

import './App.css';
import Footer from './components/Footer';

export default function App() {

  const [ cities, setCities ] = useState([])

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            time: recurso.dt,
            sunrise: recurso.sys.sunrise,
            sunset: recurso.sys.sunset,
            timezone: recurso.timezone,
            dayTime : recurso.dt + (recurso.timezone) > recurso.sys.sunrise + (recurso.timezone) && recurso.dt + (recurso.timezone) < recurso.sys.sunset + (recurso.timezone) ? 'dia' : 'noche',
            country: recurso.sys.country
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }


  return (
    <div className="App">
      <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home cities={ cities } onClose={ onClose }  onSearch={ onSearch } />} />
        <Route path='/cities' exact element={<Cities />} />
      </Routes>
      <Footer />
      </HashRouter>
    </div>
  );
}
