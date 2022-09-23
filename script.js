/*
THINGS TO ADD:
Functionality
 Done- fix cross origin read blocking (deleted giffy placeholder gif)
User experience
 - Make it look better with CSS
 - suggetion for weather types eg rain = umbralla, sun = sunglassed etc
 - ability to search outside of the UK
*/

//Weather search variables
const searcher = document.getElementById("search-button");
const userInput = document.getElementById("search-bar");
const weatherTextBoxConst = document.getElementById("weatherTextBox");
const cityWind = document.getElementById("city-wind");
const cityTemp = document.getElementById("city-temp");
const cityCloudCover = document.getElementById("city-cloud-cover");
const imageVariable = document.querySelector("img");

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searcher.click();
  }
});

//Weather click function
function invokeGifSearch() {
  weatherTextBoxConst.innerHTML = `A GIF of ${userInput.value} will play below`;
  let giphySearch =
    "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=" +
    userInput.value;

  fetch(giphySearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      imageVariable.src = response.data.images.original.url;
    });
}
function fetchWeather() {
  let location = userInput.value;
  console.log(location + "...location");
  let fetchString = `http://api.openweathermap.org/data/2.5/weather?q= ${location} ,uk&APPID=45965e86278e1d1806a35a380a87eeea`;

  fetch(fetchString)
    .then((response) => response.json())

    .then(function (data) {
      console.log(data.name);

      let kelvinTemp = data.main.temp;
      let tempConversion = -273.15;
      console.log(kelvinTemp + tempConversion + "oC");

      cityWind.innerHTML = "Wind speed " + data.wind.speed + "mph";

      let temp2Decimal = kelvinTemp + tempConversion;
      let tempRounded = temp2Decimal.toFixed(2);
      let tempUnit = "O".sup();
      cityTemp.innerHTML = tempRounded + tempUnit + "C";

      cityCloudCover.innerHTML = "Cloud cover is " + data.clouds.all + "%";
      console.log("cloud cover " + data.clouds.all + "%");
    })
    .catch(function () {
      console.log("this prints when city not found");
      let errorGifSearch =
        "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=" +
        "not found";
      fetch(errorGifSearch)
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          imageVariable.src = response.data.images.original.url;
          cityWind.innerHTML = "Try";
          cityTemp.innerHTML = "Searching again";
          cityCloudCover.innerHTML = "(Maybe a typo)";
        });
    });
}
