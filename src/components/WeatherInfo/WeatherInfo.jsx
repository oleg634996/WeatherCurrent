import { dataWeather} from "../../Api/Api"
import Markup from "../Markup/Markup";
import Future from "../Future/Future";
import { useEffect,useState} from "react"


 function WeatherInfo ({coords}){
    const [current,setCurrent] = useState({})
    const [location,setLocation] = useState({})
    const [forecast,setForecast]= useState({})
    const [isLoading, setIsLoading] = useState(false);
    console.log(current)
    
useEffect(()=>{

        dataWeather(coords).then(res=>{
            setCurrent(res.current)
            setLocation(res.location)
            setForecast(res.forecast)
            setIsLoading(true)   
        }) 
     
},[coords])

  return <div>
     {
      isLoading&& <Markup current={current} location={location}  />
    }
    <Future forecast={forecast} updateWeather={current.last_updated}/>
  </div>
}

export default WeatherInfo