# Weather App (Visual Crossing API)

This is a **Weather App** built using HTML, CSS, and JavaScript that retrieves **current weather and forecast data** for a given location using the **Visual Crossing Weather API**.

The app sends requests to the Visual Crossing Weather API and displays weather information such as temperature, conditions, and forecast for the user’s chosen city.

---

## Project Overview

This weather application allows users to:

- Enter a location (city or place name)  
- Fetch weather data from the Visual Crossing Weather API  
- Display current temperature and weather condition  
- Show additional information such as humidity, wind speed, and forecast  

The Visual Crossing Weather API provides global weather data, including current conditions and up to a 15‑day forecast, using a single, simple REST endpoint.

---

## Features

- Search for weather by city or location  
- Display current temperature and condition  
- Output additional weather details like humidity and wind  
- Basic error handling for invalid locations or API failures  
- Clean and responsive UI  

---

## Skills Demonstrated

- Fetching data from a third‑party REST API using JavaScript  
- Working with asynchronous JavaScript (`fetch`, Promises, or async/await)  
- Parsing JSON responses  
- DOM manipulation to display dynamic content  
- Handling user input and updating UI accordingly  

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Visual Crossing Weather API

---

## How to Use

1. Sign up for a free account on Visual Crossing Weather to get your **API Key**. 
2. Add your API Key into your JavaScript code where the API URL is constructed.  
3. Open `index.html` in a web browser.  
4. Enter a location and press the search button to see the weather.

Example API request format (replace `YOUR_API_KEY` and `LOCATION` with real values):

  https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/LOCATION?unitGroup=metric&key=YOUR_API_KEY

This returns data in JSON format containing forecast and current conditions.

---

## Future Improvements

- Display a multi‑day forecast with icons  
- Add geolocation support (detect user location automatically)  
- Improve UI with animations and transitions  
- Save recent searches using localStorage  

---

## Notes

- Visual Crossing allows up to **1000 free API requests per day** on the free tier, which is suitable for personal projects and demos.
- Be careful not to expose your API key in public code (consider using a backend or environment variables in real apps).
