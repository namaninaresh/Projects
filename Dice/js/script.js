let msgTag = document.getElementById("DateText");

let timetext = document.getElementById("timeText");

let date = new Date();
const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

msgTag.innerHTML = "Today is " + daysList[date.getDay()];

timetext.innerHTML = date.getHours() - 12;

if (date.getHours() < 12) {
  timetext.innerHTML += " AM";
} else {
  timetext.innerHTML += " PM";
}

timetext.innerHTML += " : " + date.getMinutes();

timetext.innerHTML += " : " + date.getSeconds();
