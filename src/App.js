import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const apiKey = "a5dee9aa016be25205e177ec82a566ca";
  const [search , setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`); 
        // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units={units}
        console.log(response);
        setCity(response.data); 
      } catch (error) {
        console.error(error);
      }
    }

    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
    // .then(function (response) {
    //   // console.log(response);
    //   setCity(response.data); 
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    getApiData();
  }, [search]);
  return (
    <div className="App">

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio Website" />
        <meta name="author" content="Shahin Mustafayev" />
        <meta
          name="keywords"
          content="Shahin Mustafayev SHAHIN MUSTAFAYEV"
        />
        <link rel="shortcut icon" href="./assets/img/favicon.ico" />
        <title>Weather App</title>
        <link rel="stylesheet" href="./assets/css/main.css" />
      </head>
      <body>
        <div id="particles-js">
          <div class="header headerDesign">

              <input type="text" className="bg-white inputDesign border border-slate-300 rounded-md py-2 pl-9
              pr-3 focus:ring-sky-500 focus:ring-1 sm:text-smborder-8 bg-slate-500" placeholder="Placeholder" 
              onChange={(e) => setSearch(e.target.value)} />
                <City city={city} />
        
          
          </div>
        </div>

        <script src="./assets/js/sweet-scroll.min.js"></script>
        <script src="./assets/js/google-analytics.js"></script>
        <script src="./assets/js/main.js"></script>
      </body>
    </html>

    </div>
  );
}

export default App; 