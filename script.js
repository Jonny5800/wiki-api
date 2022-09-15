//Non weather variables
const txt1 = document.getElementById("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
//Weather search variables
const searcher = document.getElementById("search-button");
const userInput = document.getElementById("search-bar");
const weatherTextBoxConst = document.getElementById("weatherTextBox");
const cityWind = document.getElementById("city-wind");
const cityTemp = document.getElementById("city-temp");
const cityCloudCover = document.getElementById("city-cloud-cover");

//Image related
const img = document.querySelector("img");

//Event listeners
btn1.addEventListener("click", fun1);
//Weather event listeners
searcher.addEventListener("click", invokeGifSearch);
searcher.addEventListener("click", fetchWeather);

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // event.preventDefault(); (suggested but seems not needed)
    document.getElementById("search-button").click();
  }
});

//Non weather click function
function fun1() {
  out1.innerHTML = txt1.value;
  console.log(txt1.value + "...NON weaher user input value inside text box");
}

//Weather click function
function invokeGifSearch() {
  weatherTextBoxConst.innerHTML =
    "A GIF of " + userInput.value + " will play below";
  //cityWind.innerHTML = "wind speed mph";

  let giphySearch =
    "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=" +
    userInput.value;

  fetch(giphySearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //console.log(response.data.images.original.url);
      img.src = response.data.images.original.url;
    });
  //.catch(){} Work out how to use this as a default image/error message in case no GIF is found
}
function fetchWeather() {
  let location = userInput.value;
  console.log(location + "...location");
  let fetchString = "";

  let firstBit = "http://api.openweathermap.org/data/2.5/weather?q=";
  let secondBit = location;
  let thirdBit = ",uk&APPID=45965e86278e1d1806a35a380a87eeea";
  let joined = firstBit.concat("", secondBit, "", thirdBit);
  fetchString = joined;
  console.log(joined);
  fetch(fetchString)
    .then((response) => response.json())
    // .then((data) => console.log(data["weather"][0].description);
    // console.log("first one"));
    /*
     */
    .then(function (data) {
      console.log(data.name);
      //console.log(data["weather"][0].description);
      let kelvinTemp = data.main.temp;
      let tempConversion = -273.15;
      console.log(kelvinTemp + tempConversion + "oC");
      cityWind.innerHTML = "Wind speed " + data.wind.speed + "mph";
      cityTemp.innerHTML = kelvinTemp + tempConversion + "oC";
      cityCloudCover.innerHTML = "cloud cover " + data.clouds.all + "%";
      //cityWind.innerHTML = "wind speed aaaa";

      console.log("cloud cover " + data.clouds.all + "%");
      console.log("hello");
    });
}

// //WORKING retreive object from openWeatherMAP ----------BELOW
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=edinburgh,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// ) //..................................................../*My API key - 45965e86278e1d1806a35a380a87eeea (Would hide it but its free)*/
//   .then((response) => response.json())
//   // .then((data) => console.log(data["weather"][0].description);
//   // console.log("first one"));
//   /*
//    */
//   .then(function (data) {
//     console.log(data.name);
//     console.log(data["weather"][0].description);
//     let kelvinTemp = data.main.temp;
//     let tempConversion = -273.15;
//     console.log(kelvinTemp + tempConversion + "oC");
//     console.log("Wind speed " + data.wind.speed + "mph");

//     console.log("cloud cover " + data.clouds.all + "%");
//   });
//WORKING retreive object from openWeatherMAP ----------ABOVE
/*
.
*/

// ********DO NOT DELETE BELOW********
//WORKING random GIF from gify
// let giphy =
//   "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=";
// let giphySearch = giphy + searchTerm;
// fetch(giphySearch) //https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=dog
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     //console.log(response.data.images.original.url);
//     img.src = response.data.images.original.url;
//   });
// ********DO NOT DELETE ABOVE**********
