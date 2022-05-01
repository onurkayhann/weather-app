function LiveWeather({weatherData}) {


  function getDaily() {
      let daily = []
      weatherData.daily.map((temp, get) => {
        if(daily.length < 5) {
          daily.push(<div key={get}><p className="time">{new Date(temp.dt * 1000).toLocaleDateString('en-GB', {month: '2-digit', day: '2-digit'})}</p>
          <img src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}></img>
          <p>{temp.weather[0].main}</p>
          <p>{temp.temp.day.toFixed()}°</p></div>)
        } 
      })
      return daily
    }


return (
  <div>
 {weatherData.daily && getDaily()}
  </div>
)
}


export default LiveWeather;