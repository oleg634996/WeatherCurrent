
function Markup({current,location}) {
//   console.log(current)
  
    const {temp_c,wind_kph, humidity,pressure_mb,condition}=current
    const {icon,text} = condition
    const {country,region}= location
    return <div>
        <h1 className="region">{region}</h1>
        <h2 className="country">{country}</h2>
        <img className="imgWeather" src={icon} alt="" width='150' />
        <h2 >{text}</h2>
        {temp_c&&<p className="weatherTemp">{temp_c} C</p>}
        <ul className="weatherInfo">
            <li className="list">
                <img src="./img/atmospheric.png" alt=""  />
                <p>{pressure_mb} hPa</p>
            </li>
            <li className="list">
                <img src="./img/wet.png" alt=""  />
                <p>{humidity}%</p>
            </li>
            <li className="list">
                <img src="./img/wind.png" alt="" />
                <p>{wind_kph} km/h</p>
            </li>
        </ul>
        
    </div>
}

export default Markup