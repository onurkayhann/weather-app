import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";

const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setweatherData] = useState(null);
  const [type, setType] = useState("metric");
  const [error, setError] = useState("");

  const imperial = (e) => {
    setType("imperial");
  };
  const metric = (e) => {
    setType("metric");
  };

  async function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        let apiUrl = `${baseUrl}lat=${latitude}&lon=${longitude}&units=${type}&appid=${apiKey}`;
        weatherPosition(apiUrl);
      });
    } catch {
      setError("Something went wrong.");
    }
  }

  async function weatherPosition(url) {
    try {
      const response = await axios.get(url);
      setweatherData(response.data);
    } catch (error) {
      setError("Something went wrong.");
    }
  }

  useEffect(() => {
    getLocation();
  }, [type]);

  return (
    <div className="App">
      {weatherData && (
        <Weather
          metric={metric}
          imperial={imperial}
          weatherData={weatherData}
        />
      )}
    </div>
  );
}

export default App;
