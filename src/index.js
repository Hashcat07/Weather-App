import "./styles.css";
import { fetchWeather } from "./fetchData";
import { uiManager } from "./ui";

const ui = new uiManager();

ui.init(async (city) => {
  try {
    ui.loading(true);

    const weather = await fetchWeather(city);

    ui.loading(false);
    ui.render(weather);
  } catch (err) {
    ui.loading(false);
    ui.showError(err.message);
  }
});