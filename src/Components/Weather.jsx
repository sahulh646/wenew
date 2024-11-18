import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Current from './Current'
import Forecast from './Forecast';

function Weather() {
    const [city, setCity] = useState();
    const [citySuggest, setCitySuggest] = useState([]);
    const [current, setCurrent] = useState();
    const [forecast, setForecast] = useState();
    const [location, setLocation] = useState([]);
  
    const autoComURL = `https://api.weatherapi.com/v1/search.json?key=91540b4f395c43c4a2924409240711&q=`;
  
    const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=91540b4f395c43c4a2924409240711&q=${city}&days=3&aqi=no&alerts=no`;
  
    useEffect(() => {
      if (city && city.length > 3) {
        fetchAutoCompApi();
      }
    }, [city]);
  
    const fetchAutoCompApi = async () => {
      try {
        const response = await axios.get(autoComURL + city);
        const res = response.data;
        const cityData = res.map((data) => {
          return `${data.name}, ${data.region}, ${data.country}`
        })
        setCitySuggest(cityData);
      }
      catch (e) {
        console.log('Error', e)
      }
    }
  
    const handleSelectedCity = (city) => {
      fetchWeatherUrl(city);
      setCitySuggest([]);
    }
  
    const fetchWeatherUrl = async (city) => {
      try {
        const response = await axios.get(weatherURL(city));
        const res = await response.data;
        console.log(res);
        setCurrent(res.current);
        setForecast(res.forecast);
        setLocation(res.location);
      } catch (error) {
        console.log('weather Error', error);
      }
    }
  
    return (
      <>
        <div className="container bg-primary p-5 rounded mt-5">
          <input 
          type="text" 
          placeholder='Enter City Name' 
          className='form-control' 
          onChange={(e) => { 
            setCity(e.target.value);
            if(e.target.value===""){
              setCurrent();
              setForecast();
              setLocation();
            }
            }} />
          {citySuggest && citySuggest.map((city) => {
            return <div className='text-center bg-info p-1 bg-opacity-10 text-light border border-info 
            border-opacity-25 rounded' 
            style={{cursor:'pointer'}} 
            onClick={() => handleSelectedCity(city)}>{city}</div>
          })}
          {current && <Current current = {current} location = {location} />}
          {forecast && <Forecast forecast = {forecast} location = {location} />}
        </div>
      </>
    )
  }
  
  export default Weather;