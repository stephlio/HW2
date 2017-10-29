// PART ONE - Show Chicago's weather in the widget:
// let getWeather = function() {
// let latitude = '41.8781';
// let longitude = '-87.6298';
// let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
// openweathermap_api_url += 'lat=' + latitude
// openweathermap_api_url += '&lon=' + longitude
// console.debug("Latitude: " + latitude+", Longitude: "+longitude);
// openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
/
// fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
//
// let link = document.getElementById("get_forecast")
//   link.addEventListener("click", getWeather);
//
// let convertToJSON = function(response) {
//   return response.json();
// }
//
// let updateWeather = function(dataFromService) {
//   city = dataFromService.name;
//   temp = dataFromService.main.temp;
//   icon = dataFromService.weather[0].icon;
//   document.querySelector('.card-title').innerHTML = city;
//   document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside.";
//   document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
// }
//
// let displayError = function(error) {
// console.debug(error)
// window.alert("Oops! Something went wrong.");
// }

// PART TWO - GEOLOCATION

// Define latitude and longitude
let latitude = '';
let longitude = '';

// Assign current location
function handlePosition (info) {
  latitude = info.coords.latitude.toFixed(4);
  longitude = info.coords.longitude.toFixed(4);
  getWeather()
}

// Listen for click event + use geolocation to call current weather
  let link = document.getElementById("get_forecast")
    link.addEventListener("click", function(event) {
      event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  });

// Fetch API info, then convert to JSON, update weather on page
let getWeather = function() {
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  console.debug("Latitude: " + latitude+", Longitude: "+longitude);
fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

  let convertToJSON = function(response) {
    return response.json();
  }

  let updateWeather = function(dataFromService) {
    city = dataFromService.name;
    temp = dataFromService.main.temp;
    icon = dataFromService.weather[0].icon;
    document.querySelector('.card-title').innerHTML = city;
    document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside.";
    document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
}

// Display error message
let displayError = function(error) {
  console.debug(error)
  window.alert("Oops! Something went wrong.");
}
