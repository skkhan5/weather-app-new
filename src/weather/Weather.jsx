import { useState } from "react"
import Infobox from "../infobox/Infobox"
import SearchBox from "../searchbox/SearchBox"
import "./Weather.css"

export default function Weather(){
    let [weatherinfo,setWeatherInfo]=useState({
        city:"Karachi",
        feels_like:28,
        humidity:29,
        temp:30,
        temp_max:32,
        temp_min:26,


})
let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo)
}
    return(
        <div className="weather">
            <h1> Today Weather</h1>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherinfo}/>


        </div>
    )
}