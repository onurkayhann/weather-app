function LiveWeather({weatherData}) {


  function getDaily() {
      let daily = []
      weatherData.daily.map((temp, get) => {
        if(daily.length < 5) {
          daily.push(<div key={get}><p className="time">{new Date(temp.dt * 1000).toLocaleDateString('it-IT', "DD-MM-YYYY")}</p>
          <img src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}></img>
          <p>{temp.weather[0].main}</p>
          <h2>{Math.round(temp.temp.day)}°</h2></div>)
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