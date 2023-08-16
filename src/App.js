import logo from './logo.svg'
import './App.css'
//Import form user state
import React, {useState} from 'react'
import axios from 'axios'


function App() {

const [data, setData] = useState({})
const [location, setLocation] = useState('')

const searchLocation = (event) => {
  if(event.key === 'Enter'){
      axios.get(url)..then((response) =>{
    setData(response.data)
    console.log(response.data)
   })    
  }
}


const url = 'https://api.openweathermap.org/data/2.5/weather?q=$(location)&appid=2f6df52084685ef3fffa38478f59067d'

  return (
    <div className="app">
    <div className="container">
    <div className="top">
      <div className="location">
        <p>Dallas</p>
      </div>
      <div className="temp">
        <h1>34°C</h1>
      </div>
      <div className="description">
        <p>Clouds</p>
      </div>
    </div>
    <div className="bottom">
        <div className="feels">
           <p className="bold">34°C</p>
           <p>Feels Like </p>
           <p>Feels Like </p>
        </div>
         <div className="humidity">
           <p className="bold">20%</p>
           <p>Humidity</p>
        </div>
         <div className="wind">
           <p className="bold">6 km/h</p>
           <p>Wind Speed</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
