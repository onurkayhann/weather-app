
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
    <p>{weatherData.timezone}</p>
    </div>
  );

}

export default Weather;