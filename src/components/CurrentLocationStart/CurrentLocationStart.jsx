import {useState, useEffect} from 'react'
import Axios from 'axios';
import useCurrentPosition from '../../hooks/useCurrentPosition';

const CurrentLocationStart = () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?';
  const key = '5ea7ebb2a31f209320bc688472711de0';

  const { latitude, longitude } = useCurrentPosition();
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

export default CurrentLocationStart