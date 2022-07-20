import Image from 'next/image';
import { useState, useEffect } from 'react';

const Weather = () => {
  let [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'http://api.weatherapi.com/v1/forecast.json?key=3fb8c428b62549d9b0165418221907&q=112.200.71.131&days=10&aqi=no&alerts=no'
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (e) {
        console.log('Error: ', e);
      }
    };

    fetchWeather();
  }, []);
  console.log(weatherData);
  let userLocation = `${weatherData.location.region}, ${weatherData.location.country}`;
  return (
    <div className='shadow-grey-light shadow-2xl rounded-2xl p-5'>
      <h1 className='text-center text-2xl font-semibold'>Weather Forecast</h1>
      <div className="flex gap-5 my-3">
        <Image
          src={`https:${weatherData.current.condition.icon}`}
          height={100}
          width={100}
          alt="Weather Icon"
        />
        <div>
          <p className="text-center font-semibold my-2">{userLocation}</p>
          <table className="text-center">
            <tr>
              <th className="font-medium px-3">Condition</th>
              <th className="font-medium px-3">Temprature</th>
              <th className="font-medium px-3">Wind</th>
              <th className="font-medium px-3">Humidity</th>
            </tr>
            <tr>
              <td>{weatherData.current.condition.text}</td>
              <td>{weatherData.current.temp_c}c</td>
              <td>{weatherData.current.wind_kph} kph</td>
              <td>{weatherData.current.humidity}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Weather;
