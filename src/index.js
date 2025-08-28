import "./styles.css";

import { fetchWeather } from "./fetchData";
import { uiManager } from "./ui";

const ui = new uiManager();
const button = document.querySelector("button");
button.addEventListener("click", () => {
  ui.loading(0);
  document.querySelector(".error").textContent = "";
  const city = ui.passValue();
  fetchWeather(city)
    .then((response) => {
      ui.loading(1);
      ui.render(response);
    })
    .catch((err) => {
      ui.loading(1);
      const error = document.querySelector(".error");
      error.classList.add("errorPresent");
      error.textContent = err.message;
    });
});
