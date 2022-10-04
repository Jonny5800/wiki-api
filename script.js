/*
User experience
  - suggetion for weather types eg rain = umbralla, sun = sunglassed etc
 */

//Weather search variables
const searcher = document.getElementById("search-button");
const userInput = document.getElementById("search-bar");
const weatherTextBoxConst = document.getElementById("weatherTextBox");
const cityWind = document.getElementById("city-wind");
const cityTemp = document.getElementById("city-temp");
const cityCloudCover = document.getElementById("city-cloud-cover");
const weatherDescription = document.getElementById("city-description");
const imageVariable = document.querySelector("img");
let weatherFetch = "";
let giphySearch = "";
let selectedCountry = "";
let locationSearched = "";
let kelvinTemp = "";
let tempConversion = "";
let temp2Decimal = "";
let tempRounded = "";
let tempUnit = "";

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searcher.click();
  }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function invokeGifSearch() {
  weatherTextBoxConst.innerHTML = `A GIF of ${userInput.value} will play below`;
  giphySearch =
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

function logCountry() {
  const select = document.getElementById("country-list");
  selectedCountry = select.options[select.selectedIndex].text;
  console.log("the selected value is " + selectedCountry);
}

function fetchWeather() {
  locationSearched = userInput.value;
  console.log(locationSearched + "...locationSearched");

  weatherFetch = `http://api.openweathermap.org/data/2.5/weather?q= ${locationSearched},${selectedCountry}&APPID=45965e86278e1d1806a35a380a87eeea`;
  fetch(weatherFetch)
    .then((response) => response.json())

    .then(function (data) {
      console.log(data.name + " data dot name");
      console.log(data);

      kelvinTemp = data.main.temp;
      tempConversion = -273.15;
      console.log(kelvinTemp + tempConversion + "oC");

      cityWind.innerHTML = "Wind speed: " + data.wind.speed + "mph";

      temp2Decimal = kelvinTemp + tempConversion;
      tempRounded = temp2Decimal.toFixed(2);

      tempUnit = "O".sup();
      cityTemp.innerHTML = "Temperature: " + tempRounded + tempUnit + "C";

      cityCloudCover.innerHTML = "Cloud cover:    " + data.clouds.all + "%";
      console.log("cloud cover " + data.clouds.all + "%");
      console.log(data.coord.lon + " longitude");
      console.log(data.coord.lat + " latitude");

      //ADDING WEATHER DESCRIPTION CAUSES AN ERROR SOMEHOW
      //weatherDescription.innerHTML = data;
      // console.log(weatherDescription + "  DESCRIPTION");
    })
    .catch(function () {
      console.log("This prints when the city/town is not found of mistyped");
      let errorGifSearch =
        "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=" +
        "not found";
      fetch(errorGifSearch)
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          imageVariable.src = response.data.images.original.url;
          cityWind.innerHTML = "Try again";
          cityTemp.innerHTML = "Maybe a typo";
          cityCloudCover.innerHTML = "or country format not recognised";
        });
    });
}
