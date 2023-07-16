
import './App.css';

import { useGeolocated } from "react-geolocated"
import WeatherInfo from './components/WeatherInfo/WeatherInfo';


function App() {
  const { coords} = useGeolocated();
  return (
    <div className="App">
      {coords&&<WeatherInfo coords={coords}/>}
    </div>
  );
}

export default App;
