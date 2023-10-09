import React, { useEffect } from 'react'
import './Preloader.css';
import { preLoaderAnim } from '../../animations';

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Current </span>
        <span>Weather </span>
        <span>Location.</span>
      </div>
    </div>
  )
}

export default Preloader