import { useEffect, useState } from "react"

export default function Enter({onSend}) {

    const [city, setCity] = useState("hyderabad");

    useEffect(()=>{
        handleClick();
    },[])

    const handleClick = () => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=228eddb43e554cb0a6831049242309&q=${city}&aqi=no`)
                .then((res)=> res.json())
                .then((data) => onSend(data))
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