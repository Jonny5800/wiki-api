//alert("hello");
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=porsche",
//   {
//     mode: "cors",
//   }
// );

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=porsche"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
