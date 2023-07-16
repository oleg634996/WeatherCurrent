// import { dayWeather } from "../../Api/Api";

function Future({ forecast,updateWeather }) {
  const { forecastday } = forecast;
 

//  console.log(forecastday)
  return (
    <div>
      <h4>3-Day Forecast</h4>
      <div className="line"></div>
      <ul className="futureList">
        {forecastday &&
          forecastday.map(({ day, date }) => {
            console.log(day)
            const d = new Date(date); 
            return (
              <li key={date}>
                <p>{String(d).slice(0,3)}</p>
                <img src={day.condition.icon} alt="" width={50} />
                <p>{Math.floor(day.maxtemp_c)} C</p>
              </li>
            );
          })}
      </ul>
      <p>Last Updata {updateWeather}</p>
    </div>
  );
  // dog(forecastday)
}
export default Future;


// function dog(data){
//    var days = [

//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//   ];
//   if(data){
//     const d = new Date("2023-07-24");
//    console.log(String(d).slice(0,3),'dasda')
//   }
  
// }