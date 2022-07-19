const fetchWeather = async () => {
  try {
    const res = await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=3fb8c428b62549d9b0165418221907&q=112.200.71.131&days=10&aqi=no&alerts=no'
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log('Error: ', e);
  }
};

let datas = [];
fetchWeather().then((data) => datas.push(data));

export default datas;
