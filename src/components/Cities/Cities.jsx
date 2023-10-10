import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import {citiesData} from '../../assets/data';
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./Cities.css";

const Cities = () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?';
  const key = '5ea7ebb2a31f209320bc688472711de0';

  const cities = citiesData;

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    Axios({
      url: `${url}lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=${key}&units=metric`,
    })
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCity]);

  const handleChange = (e) => {
    const selectedCityName = e.target.value;
    const city = cities.find((c) => c.name === selectedCityName);
    if (city) {
      setSelectedCity(city);
    }
  };

  return (
      <div className="select-container">
        <select onChange={handleChange} value={selectedCity.name}>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <Card props={weatherData} />
        <Link to="/forecast-selected" state={selectedCity}>
          <button type="button" className='button-cities'>See City Forecast</button>
        </Link>
      </div>
  );
};

export default Cities;