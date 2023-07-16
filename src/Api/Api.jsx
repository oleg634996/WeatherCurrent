import axios from 'axios'
const Key='121866bca3a5499c9bd92044222405'


export const  dataWeather = async({latitude,longitude})=>{
    const respons = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${latitude+','+longitude}&days=4`)
    return respons.data
}
    
export const  dayWeather = async(city)=>{
    const respons = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${Key}&q=London&days=5`)
    return respons.data
}