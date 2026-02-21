class uiManager {
  init(onSubmit) {
    const form = document.querySelector(".top-banner form");
    const input = document.querySelector(".top-banner input");
    const msg = document.querySelector(".msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const city = input.value.trim();

      if (!city) {
        msg.textContent = "Enter a valid city";
        return;
      }

      msg.textContent = "";
      input.value = "";

      onSubmit(city);
    });
  }

  render(weatherObj) {
    const list = document.querySelector(".cities");

    const li = document.createElement("li");
    li.classList.add("city");

    li.innerHTML = `
      <h2 class="city-name">
        <span>${weatherObj.city.toUpperCase()}</span>
        <sup>${weatherObj.timezone}</sup>
      </h2>

      <div class="city-temp">
        ${Math.round(weatherObj.temp)}<sup>°C</sup>
      </div>

      <figure class="icon-container">
        <figcaption>${weatherObj.conditions}</figcaption>
      </figure>

      <button class="delete">
      <svg fill="#b00000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#b00000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M87.273,197.818V512h337.455V197.818H87.273z M203.636,418.909h-34.909V256h34.909V418.909z M273.455,418.909h-34.909V256 h34.909V418.909z M343.273,418.909h-34.909V256h34.909V418.909z"></path> </g> </g> <g> <g> <path d="M331.636,69.818V0H180.364v69.818h-128v93.091h34.909h337.455h34.909V69.818H331.636z M296.727,69.818h-81.455V34.909 h81.455V69.818z"></path> </g> </g> </g></svg>
      </button>
    `;
    const del=li.querySelector(".delete");
    del.addEventListener("click",()=>
    {
      li.remove();
    })
    list.appendChild(li);

    import(`./assets/${weatherObj.icon}.png`)
      .then((module) => {
        const img = document.createElement("img");
        img.src = module.default;
        li.querySelector(".icon-container").prepend(img);
      });
    
  }

 loading(state) {
  let loader = document.querySelector(".loader");

  if (!loader) {
    loader = document.createElement("div");
    loader.className = "loader";
    loader.innerHTML = "<div class='spinner'></div>";
    document.body.appendChild(loader);
  }

  loader.style.display = state ? "flex" : "none";
}

  showError(message) {
    const msg = document.querySelector(".msg");
    msg.textContent = message;
  }
}

export { uiManager };