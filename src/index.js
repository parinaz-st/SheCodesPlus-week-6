function getFormattedTime() {
  let today = new Date();
  let formattedCurrentTime = `
  ${today.getHours().toString().padStart(2, "0")} : ${today
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return formattedCurrentTime;
}

function getFormattedDay() {
  let today = new Date();
  let currentDay = today.getDay();
  let dayArr = [
    "Sunday",
    "Monday",
    "Thusday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayArr[currentDay];
}
function fahrenheitToCelsius(faren) {
  let celsius = ((faren - 32) * 5) / 9;
  return Math.round(celsius);
}
function updateWeatherInfo(response) {
  let currentTemp = document.querySelector("#current-temp");
  let currentWind = document.querySelector("#current-wind");
  let currentHumidity = document.querySelector("#current-Humidity");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  currentHumidity.innerHTML = response.data.main.humidity;
  currentWind.innerHTML = Math.round(response.data.wind.speed);
}
function callWeatherApi(lat, lng) {
  let weatherApiKey = "e1b334efc708d6c7e381a6a3dcb1bfa7";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`;
  axios.get(url).then(updateWeatherInfo);
}
function getOpenCageData(response) {
  let latitude = response.data.results[0].geometry.lat;
  let longitude = response.data.results[0].geometry.lng;
  callWeatherApi(latitude, longitude);
}
function getTownCoords() {
  let openCageApi = "1568bf3564eb4debbcfc44fb36ca98a4";
  let cityName = getCityName();
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${openCageApi}`;
  axios.get(url).then(getOpenCageData);
}
function getCityName() {
  let textBoxCity = document.querySelector(".city-name");
  return textBoxCity.value;
}
function btnSearchAction(event) {
  // this one line disables the auto referesh
  event.preventDefault();
  textBoxCity = getCityName();
  let cityNamelabel = document.querySelector("#cityLabel");
  cityNamelabel.innerHTML = textBoxCity;
  getTownCoords();
}
function addCurrentDateTime() {
  let getTime = document.querySelector("#current-time");
  let getDay = document.querySelector("#current-Day");
  getTime.innerHTML = getFormattedTime();
  getDay.innerHTML = getFormattedDay();
}
function start() {
  addCurrentDateTime();

  let btn = document.querySelector("button");
  btn.addEventListener("click", btnSearchAction);
}

start();
