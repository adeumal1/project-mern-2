import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios';


const ForecastSelected = () => {
  const location = useLocation();
  const  selectedCity  = location.state;
  const latitude = selectedCity.latitude;
  const longitude = selectedCity.longitude;
  const url = 'https://api.openweathermap.org/data/2.5/forecast?';
  const key = '5ea7ebb2a31f209320bc688472711de0';

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      Axios({
        url: `${url}lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`,
      })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [latitude, longitude]);
  return weatherData
}

export default ForecastSelected