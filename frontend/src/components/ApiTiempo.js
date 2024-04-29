// ApiTiempo.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../ApiTiempo.css';
import HomeIcon from '@mui/icons-material/Home';

function ApiTiempo() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed(1)}°C</p> : null}
              <p>Sensación Térmica</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humedad</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{(data.wind.speed * 3.6).toFixed(2)} km/h</p> : null}
              <p>Velocidad del Viento</p>
            </div>
          </div>
        )}
        <Link to="/">
          <button className="button">
            <HomeIcon />  Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ApiTiempo;
