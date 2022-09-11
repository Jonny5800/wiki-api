//Non weather variables
const txt1 = document.getElementById("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
//Weather search variables
const searcher = document.getElementById("search-button");
const userInput = document.getElementById("search-bar");
const weatherTextBoxConst = document.getElementById("weatherTextBox");
//Image related
const img = document.querySelector("img");
const searchTerm = "x";

//Event listeners
btn1.addEventListener("click", fun1);
searcher.addEventListener("click", forWeather);

//Non weather click function
function fun1() {
  out1.innerHTML = txt1.value;
  console.log(txt1.value + "...NON weaher user input value inside text box");
}

//Weather click function
function forWeather() {
  weatherTextBoxConst.innerHTML = userInput.value + " GIF will play";

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
}

// TO DO - Weather click function needs to change the value of searchTerm variable OR change the whole API string for the giphy variable

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
/*********************/
//WORKING retreive object from openWeatherMAP
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// ) //..................................................../*My API key - 45965e86278e1d1806a35a380a87eeea (Would hide it but its free)*/
//   .then((response) => response.json())
//   .then((data) => console.log(data));
