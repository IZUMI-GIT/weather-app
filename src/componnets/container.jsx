import { useState } from "react";
import Enter from "./enter";
import Weather from "./weather";

export default function Container() {

    const [data, setData] = useState([])

    const handleData = (newData) => {
        setData(newData);
    }
    
    return(
        <>
        <Enter onSend={handleData} />
        <Weather climate={data} />
        </>
    )
}