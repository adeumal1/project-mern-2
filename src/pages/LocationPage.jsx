import React from 'react'
import Card from '../components/Card/Card';
import CurrentLocationStart from '../components/CurrentLocationStart/CurrentLocationStart';

const LocationPage = () => {
  const weatherData  = CurrentLocationStart();
  return <Card props={weatherData} />
  
}

export default LocationPage