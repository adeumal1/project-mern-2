import React from 'react'
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faRulerVertical } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  return (
    <div className="card-container">
      {props.props ? (
        <div className="content">
          <h2>{props.props.name}</h2>
          <h1>{`${Math.trunc(props.props.main.temp)}°`}</h1>
          <img src={ `http://openweathermap.org/img/wn/${props.props.weather[0].icon}.png`} alt={props.props.weather[0].main} />
          <p>{props.props.weather[0].description}</p>
          <div className="content-icons">
            <p><FontAwesomeIcon icon={faWind} /> {props.props.wind.speed}m/s</p>
            <p><FontAwesomeIcon icon={faDroplet} /> {props.props.main.humidity}%</p>
            <p><FontAwesomeIcon icon={faRulerVertical} /> {props.props.main.sea_level}m</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Card