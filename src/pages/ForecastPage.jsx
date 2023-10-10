import React from 'react'
import Forecast from '../components/Forecast/Forecast';
import CardForecast from '../components/CardForecast/CardForecast';

const ForecastPage = () => {
  const weatherData  = Forecast();
  return <CardForecast props={weatherData} />
}

export default ForecastPage