// 07e48843d7d39501a2e6c5284cfaf0bc
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// AIzaSyCSGMQmV4WR7yBQGDWZik7nVtjBi8ttevg    map api key

document.getElementById("button").addEventListener("click", weatherFunc);
var mapContaier = document.getElementById("map");
var API_KEY = "07e48843d7d39501a2e6c5284cfaf0bc";
var MAP_API_KEY = "AIzaSyCSGMQmV4WR7yBQGDWZik7nVtjBi8ttevg";

//  onclick this api call according to the city name
function weatherFunc() {
  var city = document.getElementById("city").value;

  //  map function

  var iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.loading = "lazy";
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${city}`;
  mapContaier.append(iframe);

  // weather fetch function
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // sevenDayWeather(res);
      displayData(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// onload we are getting lat lng and after that we are calling api according to the lat lng
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  // console.log(lat, lng);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      displayData(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

//  display data append all the data in DOM means in browser
const displayData = (data) => {
  const { main, sys, clouds, wind } = data;

  var minTemp = document.getElementById("minTemp");
  var maxTemp = document.getElementById("maxTemp");
  var winds = document.getElementById("winds");
  var cloud = document.getElementById("cloud");
  var sunrise = document.getElementById("sunrise");
  var sunset = document.getElementById("sunset");

  minTemp.textContent = `MinTemp is in ${main.temp_min} k`;
  maxTemp.textContent = `MaxTemp is in ${main.temp_max} k`;

  wind.textContent = `Deg is ${wind.deg} , Gust is ${wind.gust} & Speed is ${wind.speed}`;

  cloud.textContent = `Cloud is ${clouds.all}`;

  sunrise.textContent = `sunrise in UTC ${sys.sunrise}`;
  sunset.textContent = `sunset in UTC ${sys.sunset}`;
};
