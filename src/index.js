let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

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
function getOpenCageData(response) {
  debugger;
  console.log(response);
  let latitude = response.data.results[0].geometry.lat;
  let longitude = response.data.results[0].geometry.lng;
  console.log(`latitide: + ${latitude}, longitude: ${longitude}`);
}
function getTownCoords() {
  debugger;
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
  debugger;
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
