export default function Weather({climate}) {


    if (!climate || !climate.location || !climate.current) {
        return <div>No data available. Please search for a city.</div>;
    }

    return (
        <>
        <div>
            <label>Location : {climate.location.name} </label>
            <label>Country : {climate.location.country} </label>
        </div>
        <div>
            <label>Temperature : {climate.current.temp_c} </label>
            <br />
            <label>Humidity : {climate.current.humidity}</label>
            <br />
            <label>Condition : {climate.current.condition.text}</label>
        </div>
        </>
    )
}