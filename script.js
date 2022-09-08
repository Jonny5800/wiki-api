//alert("hello");

// //WORKING retreive object from openWeatherMAP
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// ) //..................................................../*My API key - 45965e86278e1d1806a35a380a87eeea (Would hide it but its free)*/
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
// ) //https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=dog
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/***************
//WORKING random GIF from gify
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
  *********************/

/***** 
Post request using fetch
syntax from - https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
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

*****/

/*************
curl -X POST -F 'grant_type=Jonny5800' \
-F 'client_id=YOUR_CLIENT_ID' \
-F 'client_secret=YOUR_CLIENT_SECRET' \
https://meta.wikimedia.org/w/rest.php/oauth2/access_token
*****************/

//curl -v -H "Content-Type: application/json" -X POST -d '{"name":"your name","phonenumber":"111-111"}' http://www.abc.com/details

fetch("https://meta.wikimedia.org/w/rest.php/oauth2/access_token")
  .then((response) => response.json())
  .then((data) => console.log(data));
