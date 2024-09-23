import { useEffect, useState } from "react"
import axios from "axios";
export default function Enter({onSend}) {

    const [city, setCity] = useState("lucknow");

    useEffect(()=>{
        handleClick();
    },[])

    const handleClick = () => {
            axios({
               method : "get",
               url : `http://api.weatherapi.com/v1/current.json`,
               params: {
               key : "enter the key",
               q :  city,
               aqi :"no"
                    },
                })
                .then((response) => onSend(response.data))
                .catch((error) => {
                    console.error("Error fetching weather data:", error)
                })
    }

    

    return(
        <>
        <input 
            type="text" 
            placeholder="city"
            value = {city}
            onChange={(e)=>{
                setCity(e.target.value)
            }}
        />
        <button 
            onClick={handleClick}>search</button>
        </>
    )
}