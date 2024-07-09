import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){ 
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Hyderabad",
        feelsLike:24,
        temp:25,
        tempMin:23,
        tempMax:27,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )   
}