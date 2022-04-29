import { useEffect, useState } from "react";
import './App.css';

const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState('');
  const [value, setValue] = useState("metric");

  const fahrenheit = (e) => {
    setValue("imperial");
  };
  const celsius = (e) => {
    setValue("metric");
  };


  return (
    <div className="App">
    </div>
  );
}

export default App;
