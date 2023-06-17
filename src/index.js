let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

function getFormattedTime() {
  let today = new Date();
  let formattedCurrentTime = `
  ${today
    .getHours()
    .toString()
    .padStart(2, "0")} : ${today.getMinutes().toString().padStart(2, "0")}`;

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
    "Saturday"
  ];
  return dayArr[currentDay];
}
function btnSearchAction(event) {
  // this one line disables the auto referesh
  event.preventDefault();
  let textBox = document.querySelector("input");
  let cityNamelabel = document.querySelector("#city");
  cityNamelabel.innerHTML = textBox.value;
}

function addCurrentDateTime() {
  let getTime = document.querySelector("#current-time");
  let getDay = document.querySelector("#current-Day");
  getTime.innerHTML = getFormattedTime();
  getDay.innerHTML = getFormattedDay();
}
function addCityName() {
  let btn = document.querySelector("button"); // console.log(txtCity.innerHTML);
  btn.addEventListener("click", btnSearchAction);
}
function start() {
  addCurrentDateTime();
  addCityName();
}

start();
