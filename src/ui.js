class uiManager {
  passValue() {
    const input = document.getElementById("search");
    return input.value.trim();
  }
  render(weatherObj) {
    this.reset();
    const city = document.querySelector(".city");
    const icon = document.querySelector(".icon");
    const datetime = document.querySelector(".datetime");
    const conditions = document.querySelector(".conditions");
    const weatherCard = document.querySelector(".weatherCard");
    weatherCard.classList.add("loaded");
    city.textContent = `City: ${weatherObj.city.toUpperCase()}`;
    import(`./assets/${weatherObj.icon}.png`).then((module) => {
      const img = document.createElement("img");
      img.src = module.default;
      icon.appendChild(img);
    });

    datetime.textContent = `Time-Fetched: ${weatherObj.datetime}`;
    conditions.textContent = `Condition: ${weatherObj.condition}`;
  }
  loading(isFetched) {
    this.reset();
    const loading = document.querySelector(".loading");
    if (!isFetched) {
      loading.style.display = "block";
      loading.textContent = "Fetching Data";
    } else {
      loading.style.display = "none";
      loading.textContent = "";
    }
  }
  reset() {
    document.querySelector(".city").textContent = "";
    document.querySelector(".icon").innerHTML = "";
    document.querySelector(".datetime").textContent = "";
    document.querySelector(".conditions").textContent = "";
  }
}
export { uiManager };
