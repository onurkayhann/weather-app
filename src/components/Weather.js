import React from 'react';
import LiveWeather from './LiveWeather';
import '../App.css';

function Weather({weatherData, imperial, metric}) {

  function getHour() {
    const hourly = []
    weatherData.hourly.map((temp, get) => {
      if (get % 3 === 0 && hourly.length < 5) {
        hourly.push(<div key={get}><p>{new Date(temp.dt * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
        <img src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}></img>
        <p>{temp.weather[0].main}</p>
        <p>{temp.temp.toFixed()}°</p>
        </div>)
      } else {
        console.log('Something went wrong.');
      }
    })
    return hourly;
  }



  console.log(weatherData);

 

  return (
    <div className="app">

    <div className="buttonContainer">
      <button className="convertButton" onClick={metric}>Celsius</button>
        <button className="convertButton" onClick={imperial}>Fahrenheit</button>
      </div>
    
    <div className="weatherCard">
    <p>{weatherData.timezone}</p>
    
    {weatherData.current ? <h1>{weatherData.current.temp.toFixed()}°</h1> : null}
    {weatherData.current &&
      <p>{weatherData.current.weather[0].main}</p>}
      {weatherData.current && <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>}
    </div>
    

      


        {weatherData.timezone != undefined && (
          <div className="section-1">

            <div>
            <p>Feels like</p>
              {weatherData.current ? (
                <p>{weatherData.current.feels_like.toFixed()}°</p>
              ) : null} 
            </div>

            <div>
            <p>Humidity</p>
              {weatherData.current ? <p className="bold">{weatherData.current.humidity}%</p> : null}
            </div>

            <div>
            <p>Wind Speed</p>
              {weatherData.current ? (
                <p>{weatherData.current.wind_speed.toFixed()} M/S</p>
              ) : null}
            </div>
            <div>
                <p>Sunrise:</p>
                {weatherData.current &&  
                <p>{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>}
                <p>Sunset:</p>
                {weatherData.current && 
                <p>{new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>}
                
            </div>
          </div>
          
        )}
            
            <div>
              {weatherData.hourly && getHour()}
            </div>
          {weatherData && <LiveWeather weatherData={weatherData} />}
      </div>      

  )}
    


export default Weather;