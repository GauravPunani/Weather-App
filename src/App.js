import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {WeatherCard} from './components/WeatherCard';
import { SearchLocation } from './components/SearchLocation';
import { Container, Row } from 'react-bootstrap';

function App() {

  const [weatherData, setWeatherData] = useState([]);

  const addLocation = async (location) => {
    console.log('add location called');
    const isExist = weatherData.find(data => data.data.name == location);

    if(!isExist){
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&&units=metric`);

      setWeatherData((weatherData) => [...weatherData, data]);
    }

  }

  const removeLocation = (id) => {
    console.log('in remove location');
    console.log('weather data', weatherData);
    console.log('index id', id);
    const newData = weatherData.filter((data, index) => index != id);

    console.log('new data');
    console.log(newData);

    setWeatherData(newData);
  }

  return (
    <Container margin >
      <div className="App">
        <SearchLocation onEnter={addLocation} />
        <Row>
          <WeatherCard data={weatherData} onRemove={removeLocation} />
        </Row>
      </div>
    </Container>
  );
}

export default App;
