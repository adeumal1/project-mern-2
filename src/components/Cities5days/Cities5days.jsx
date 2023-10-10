import React, { useState, useEffect } from 'react';
import {citiesData} from '../../assets/data';
import CardForecast from '../CardForecast/CardForecast';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import './Cities5days.css'

const Cities5days = () => {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?';
  const key = '5ea7ebb2a31f209320bc688472711de0';
  const cities = citiesData;

  const location = useLocation();
  const  selectedCities  = location.state;
  const name = selectedCities.name;

  const [selectedCity, setSelectedCity] = useState(cities.find((city) => city.name === name));

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    Axios({
      url: `${url}lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=${key}&units=metric`,
    })
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
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
    <>
     <div className="select-container">
        <select onChange={handleChange} value={selectedCity.name}>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <CardForecast props={weatherData} />
    </>
     
  );
};

export default Cities5days;