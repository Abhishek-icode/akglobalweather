import React, { useState, useEffect } from 'react'
import Weatherard from './Weatherard'

function App() {
  const [searchvalue, setsearchvalue] = useState("goa")
  const [tempinfo, settempinfo] = useState({})

  const getinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=3b5b770eb1c757c9294345a09164e446`;

      const res = await fetch(url)
      const data = await res.json()
      // console.log(data);
      const { temp } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;
      const { temp_min } = data.main
      const { temp_max } = data.main

      const newweatherinfo = { temp, weathermood, name, speed, country, temp_min, temp_max }
      settempinfo(newweatherinfo)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getinfo();
  }, [])
  return (
    <>
      <div className="mdiv">
        <h1 className="titelname"><i className="far fa-snowflake"></i>&nbsp; AK Global Weather &nbsp;<i className="far fa-snowflake"></i></h1>
        <div className="cdiv">
          <div className="inputbtn">
            <input className="input" type="search" placeholder="Enter Your Location" id="search" autoFocus value={searchvalue} onChange={(e) => setsearchvalue(e.target.value)} />
            <button className="btn" className="btn" onClick={getinfo}>Search</button>
          </div>
          <Weatherard tempinfo={tempinfo} />
        </div>
      </div>
    </>
  )
}

export default App
