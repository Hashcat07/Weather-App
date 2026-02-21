async function fetchData(city) {
  try {
    const key = "6MKGMYBFB8YRNATYGRPKTHJ34";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=${key}&contentType=json`;

    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`City ${city} Not Found`);
    }

    const data = await response.json();

    return {
      city: data.address,
      timezone: data.timezone,
      temp: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

function fetchWeather(city) {
  return fetchData(city);
}

export { fetchWeather };
