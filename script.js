//alert("hello");
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// )..................................................../*My API key - 45965e86278e1d1806a35a380a87eeea (Would hide it but its free)*/
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=porsche",
//   //.................................../*My API key -   hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ (Would hide it but its free)*/
//   {
//     mode: "cors",
//   }
// );

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=porsche"
// )//https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=dog
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/*
const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=porsche"
) //https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=dog
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
  });
*/

fetch("https://meta.wikimedia.org/w/rest.php/oauth2/access_token", {
  method: "POST",
  body: JSON.stringify({
    title: "something",
    body: "else",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// curl -X POST -F 'grant_type=client_credentials'
