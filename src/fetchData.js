async function fetchData(city){
    try{
    const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=6MKGMYBFB8YRNATYGRPKTHJ34&contentType=json`
    const response=await fetch(url,{mode:"cors"})
    if(!response.ok){
        throw new Error(`${response.status}`)
    }
    const data= await response.json()
    const cityWeather={
        city:data.address,
        datetime:data.currentConditions.datetime,
        condition:data.currentConditions.conditions,
        icon:data.currentConditions.icon

    }
    return cityWeather
}
    catch(error){
        if(error.message==="400"||error.message==="404"){
            throw new Error("Invalid City Name")
        }
    }
}
function fetchWeather(city){
    return fetchData(city)
}

export {fetchWeather}