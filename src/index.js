//import "./styles.css"

import { fetchWeather } from "./fetchData"
import { passValue } from "./ui"

const button=document.querySelector("button")
button.addEventListener("click",()=>{
    const city=passValue()
    fetchWeather(city).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err.message)
    })
})

