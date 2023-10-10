import React from 'react'
import ForecastSelected from '../components/ForecastSelected/ForecastSelected';
import CardForecast from '../components/CardForecast/CardForecast';

const ForecastSelectedPage = () => {
  const weatherData  = ForecastSelected();
  return <CardForecast props={weatherData} />
}

export default ForecastSelectedPage