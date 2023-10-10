import React from 'react';
import './CardForecast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faClock } from '@fortawesome/free-solid-svg-icons'

const CardForecast = (props) => {
  console.log(props.props)
  return (
    <>
      {props.props ? (
         <div>
          <h1 className='title-city'>{props.props.city.name}</h1>
         </div>
        ) : (
          <div>
            <p>Error</p>
          </div>
        )}
      <div className="cards">
        {props.props ? (
          props.props.list.map((card) => (
            <div className="card" key={card.dt}>
              
              <h1>{card.main.temp}°</h1>
              <img src={ `http://openweathermap.org/img/wn/${card.weather[0].icon}.png`} alt={card.weather[0].main} />
              <div className="content-icons">
                <p><FontAwesomeIcon icon={faWind} /> {card.wind.speed}m/s</p>
                <p><FontAwesomeIcon icon={faDroplet} /> {card.main.humidity}%</p>
                <p><FontAwesomeIcon icon={faClock} /> {card.main.pressure}</p>
              </div>
              <p>{card.dt_txt}</p>
            </div>
          ))
        ) : (
          <div>
            <p>Error</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CardForecast;