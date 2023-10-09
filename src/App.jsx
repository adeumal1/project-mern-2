import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

import useCurrentPosition from './hooks/useCurrentPosition';
import Card from './components/Card/Card';
import Preloader from './components/Preloader/Preloader';

function App() {
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
  console.log(weatherData);
  return (
    <div className="container">
      <div id="cloud-intro">
        <Preloader />
        <Card props={weatherData} />
      </div>
    </div>
  );
}

export default App;
