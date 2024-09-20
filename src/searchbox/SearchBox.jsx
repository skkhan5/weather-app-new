import { useState } from "react"
import "./searchbox.css"
export default function searchBox({updateInfo}){
    let [city , setCity]= useState("")
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6c4db5344a2a327bf7f9cb0f270a1375"
    let getWeatherinfo=async()=>{
        let responce= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await responce.json()
   
        let result ={
           city:city,
           feels_like:jsonResponse.main.feels_like,
           humidity:jsonResponse.main.humidity,
           temp:jsonResponse.main.temp,
           temp_max:jsonResponse.main.temp_max,
           temp_min:jsonResponse.main.temp_min,
        }

        console.log(result)
        return result
    }




    let handlechange = (event)=>{
        console.log(event.target.value)
        setCity(event.target.value)
       

    }
    let handlesubmit= async (event)=>{
        event.preventDefault()
        setCity("")
      let newInfo = await  getWeatherinfo()
      updateInfo(newInfo)
    }
return(
    <form className="searchbox flex-wrap gap-3 bg-gradient-to-r from-cyan-500 to-blue-500" onSubmit={handlesubmit}>
        <br />
   <label htmlFor="City">"Weather App"</label>
   <br />
    <input placeholder="weather" id="City" value={city} onChange={handlechange}/>
    <br />
    <button>Search</button>
    </form>
)


}