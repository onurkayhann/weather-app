function LiveWeather({weatherData}) {


  function getDaily() {
      const daily = []
      weatherData.daily.map((temp, get) => {
        if(daily.length < 5) {
          daily.push(<div key={get}><p className="time">{new Date(temp.dt * 1000).toLocaleDateString('sv-SE', "YYYY-MM-DD")}</p>
          <img src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}></img>
          <p>{temp.weather[0].main}</p>
          <h2 className="weather-style">{Math.round(temp.temp.day)}°</h2></div>)
        } 
      })
      return daily
    }


return (
  <div className="getDaily">
 {weatherData.daily && getDaily()}
  </div>
)
}


export default LiveWeather;