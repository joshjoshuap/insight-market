import datas from '/src/js/fetch-api';

const Weather = () => {
  let weatherData = datas[0];
  console.log(weatherData);
  return (
    <>
      {/* <div></div>
      <div>
        <p>{`${weatherData.location.region}, ${weatherData.location.country}`}</p>
        <table>
          <tr>
            <th>Condition</th>
            <th>Temprature</th>
            <th>Wind</th>
            <th>Humidity</th>
          </tr>
          <td>
            <th>{weatherData.current.condition.text}</th>
            <th>{weatherData.current.temp_c}</th>
            <th>{weatherData.current.wind_kph}</th>
            <th>{weatherData.current.humidity}</th>
          </td>
        </table>
      </div> */}
    </>
  );
};

export default Weather;
