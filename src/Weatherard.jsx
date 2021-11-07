import React, { useState, useEffect } from 'react'

function Weatherard({ tempinfo }) {
  const [tempstatus, settempstatus] = useState()
  const { temp, weathermood, name, speed, country, temp_min, temp_max } = tempinfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case 'Clouds': settempstatus('fas fa-cloud')
          break;
        case 'Haze': settempstatus('fas fa-smog')
          break;
        case 'Sunny': settempstatus('fas fa-sun')
          break;
        case 'Rain': settempstatus('fas fa-cloud-rain')
          break;
        case 'Clear': settempstatus('fas fa-sun')
          break;
        case 'Overcast': settempstatus('fas fa-cloud-sun-rain')
          break;
        case 'Partially cloud': settempstatus('fas fa-cloud-sun')
          break;
        case 'Drizzle': settempstatus('fas fa-cloud-showers-heavy')
          break;
        case 'Storm': settempstatus('fas fa-poo-storm')
          break;
        case 'Smoke': settempstatus('fas fa-smog')
          break;
        case 'Thunderstorm': settempstatus('fas fa-poo-storm')
          break;
        case 'Snow': settempstatus('fas fa-snowflake')
          break;
        case 'Atmosphere': settempstatus('fas fa-cloud')
          break;
        case 'Moon': settempstatus('fas fa-moon')
          break;
        default:settempstatus('fas fa-sun')
          break;
      }
    }
  }, [weathermood])
  return (
    <>
      <div className="box">
        <div className="wave one"></div>
        <div className="wave two"></div>
        <div className="wave three"></div>
        <h1 className="templogo"><i class={`${tempstatus}`}></i></h1>
        <div className="weatherinfo">
          <h3 className="location"><i class="fas fa-map-marker-alt"></i> {name}, {country}</h3>
          <h1 className="temprature">{temp} &deg; C , &nbsp; {weathermood}</h1>
          <h3 className="wind">WIND : {speed} km/h</h3>
          <h3 className="minmax">MIN : {temp_min}, &nbsp; MAX : {temp_max}</h3>
        </div>
      </div>
    </>
  )
}

export default Weatherard
