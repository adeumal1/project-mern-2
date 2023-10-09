import { useState, useEffect } from "react"

const useCurrentPosition = () => { 
  const [currentPosition, setCurrentPosition] = useState(() => ({
    latitude: null,
    longitude: null
  }))

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition({
       latitude: position.coords.latitude,
       longitude: position.coords.longitude
      })
     })
  }, [])
  
  return currentPosition
} 

export default useCurrentPosition