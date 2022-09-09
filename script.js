const txt1 = document.getElementById("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const searcher = document.getElementById("search-button");
const userInput = document.getElementById("search-bar");
function fun1() {
  out1.innerHTML = txt1.value;
}

btn1.addEventListener("click", fun1, () => {
  console.log(txt1);
});

searcher.addEventListener("click", () => {
  console.log(userInput.value);
});

//WORKING random GIF from gify
const img = document.querySelector("img");
let searchTerm = "wave";
let giphy =
  "https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=";
let giphySearch = giphy + searchTerm;
fetch(giphySearch) //https://api.giphy.com/v1/gifs/translate?api_key=hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ&s=dog
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
  });
/*********************/
//WORKING retreive object from openWeatherMAP
// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45965e86278e1d1806a35a380a87eeea"
// ) //..................................................../*My API key - 45965e86278e1d1806a35a380a87eeea (Would hide it but its free)*/
//   .then((response) => response.json())
//   .then((data) => console.log(data));
/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
*/
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

/**********************
fetch("https://meta.wikimedia.org/w/rest.php/oauth2/access_token")
  .then((response) => response.json())
  .then((data) => console.log(data));
************/

// Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0YzZmODkzNjgwYWY4NzgwOGIyMWY5N2ViNDZhZTZhMyIsImp0aSI6ImExNzAzMjU0Y2RiNjFmM2UyOTUzZTUyMGYxMWJjZTUzNjkyZGMxZmY0MzYyZDAwNzlkZTkyODgzZWYzZWNmZWM4MGU4ODRiNjVmMjdhYmIxIiwiaWF0IjoxNjYyNjY0NTkxLCJuYmYiOjE2NjI2NjQ1OTEsImV4cCI6MzMyMTk1NzMzOTEsInN1YiI6IjcwNTc5NzYzIiwiaXNzIjoiaHR0cHM6XC9cL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIiwiY3JlYXRlZWRpdG1vdmVwYWdlIiwiZWRpdHByb3RlY3RlZCJdfQ.am4KjtLn97Jas7H6VOPVpEFp_9hmfytfa7Ypn2LTEdBknVg3quFdGXNgZVQtP4S5BPeD1Y4uiw9WZ-h0oltpyZYavONCKWr952XR34rvysLscPwBov3tauLbjKp7-46XSa41mJ2Y3hH6-jfQNIQ828Z5mzjnVMXiwZJz2hufIHfwdlD8yGYMSaWEEgh6DCT3ymUNciZOO8dmiP5t5KI-SThLsUhl0JJKHTXQySbEMAjTzRYwtFbkjaSMrkTME3F7mp8v1NYpCx6xH23x0P50V-geEdTg6XybJ_sSwhHQOi6xZut3jHmclJCqpVVeLBpyvZ6YcM2yCrpimTbzWzYH0MCh9jUP8UgEratfyC6qM9fBbVIR80GsUsKebmRwzRJO--LL31EG34xmiOdRPhzCahD1JUrjNmbYrEyXT8rQQJlzYIJiFXTarVtmQxvqA7Y131XJszgizBpG9rCCSp9p-tZP4NG3o7Arac6qFPQU0YnRMAA1qeb_5Nan3JW0vymLXupW_zxQSp73dUZx4LLBKV37lJbAF0JnM13V3JIVKjSYmIiwYHMTOAWKkI5dEYqVIjy5xmXRhs43SxZ6Lzo8j9kPYXuFP4oBrR4mxWhqMnY1KLDx90dTcW6eSCbqK5j8PV82mjNp0JiWZkeMvsiUzJ5x-TKl16meEdmsaOYylDM
// https://api.wikimedia.org/core/v1/wikipedia/en/page/Earth/bare
