function currentTime() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var days = date.getDay();
  var todayDay = date.getDate();
  var month = date.getMonth();
  var currentYear = date.getFullYear();
  var monthName = document.getElementById("month");
  var am_or_pm = document.getElementById("am-pm");
  var dayName = document.getElementById("days-name");

  if (hours < 10) {
    document.getElementById("hours").innerText = "0" + hours;
  } else {
    document.getElementById("hours").innerText = hours;
  }
  if (secs < 10) {
    document.getElementById("secs").innerText = "0" + secs;
  } else {
    document.getElementById("secs").innerText = secs;
  }
  if (mins < 10) {
    document.getElementById("mins").innerText = "0" + mins;
  } else {
    document.getElementById("mins").innerText = mins;
  }

  if (hours > 12) {
    am_or_pm.innerText = "PM";
  } else {
    am_or_pm.innerText = "AM";
  }
  if (hours >= 12) {
    hours = hours - 12;
  }
  if (days == 0) {
    dayName.innerText = "Sunday";
  }
  if (days == 1) {
    dayName.innerText = "Monday";
  }
  if (days == 2) {
    dayName.innerText = "Tuesday";
  }
  if (days == 3) {
    dayName.innerText = "Wednesday";
  }
  if (days == 4) {
    dayName.innerText = "Thursday";
  }
  if (days == 5) {
    dayName.innerText = "Friday";
  }
  if (days == 6) {
    dayName.innerText = "Saturday";
  }

  if (month == 0) {
    monthName.innerText = "January";
  }
  if (month == 1) {
    monthName.innerText = "February";
  }
  if (month == 2) {
    monthName.innerText = "March";
  }
  if (month == 3) {
    monthName.innerText = "April";
  }
  if (month == 4) {
    monthName.innerText = "May";
  }
  if (month == 5) {
    monthName.innerText = "June";
  }
  if (month == 6) {
    monthName.innerText = "July";
  }
  if (month == 7) {
    monthName.innerText = "August";
  }
  if (month == 8) {
    monthName.innerText = "September";
  }
  if (month == 9) {
    monthName.innerText = "October";
  }
  if (month == 10) {
    monthName.innerText = "November";
  }

  document.getElementById("day").innerText = todayDay;
  document.getElementById("year").innerText = currentYear;
}

setInterval(currentTime, 1000);
