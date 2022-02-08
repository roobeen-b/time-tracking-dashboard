const times = document.getElementsByTagName("a");

const workTime = document.getElementById("work-time");
const workLast = document.getElementById("work-last");

const playTime = document.getElementById("play-time");
const playLast = document.getElementById("play-last");

const studyTime = document.getElementById("study-time");
const studyLast = document.getElementById("study-last");

const exerciseTime = document.getElementById("exercise-time");
const exerciseLast = document.getElementById("exercise-last");

const socialTime = document.getElementById("social-time");
const socialLast = document.getElementById("social-last");

const selfTime = document.getElementById("self-time");
const selfLast = document.getElementById("self-last");

times[0].addEventListener("click", daily);
times[1].addEventListener("click", weekly);
times[2].addEventListener("click", monthly);

function appendDataDaily(data) {
  workTime.innerHTML = data[0].timeframes.daily.current + "hrs";
  workLast.innerHTML =
    "Yesterday: " + data[0].timeframes.daily.previous + "hrs";
  playTime.innerHTML = data[1].timeframes.daily.current + "hrs";
  playLast.innerHTML =
    "Yesterday: " + data[1].timeframes.daily.previous + "hrs";
  studyTime.innerHTML = data[2].timeframes.daily.current + "hrs";
  studyLast.innerHTML =
    "Yesterday: " + data[2].timeframes.daily.previous + "hrs";
  exerciseTime.innerHTML = data[3].timeframes.daily.current + "hrs";
  exerciseLast.innerHTML =
    "Yesterday: " + data[3].timeframes.daily.previous + "hrs";
  socialTime.innerHTML = data[4].timeframes.daily.current + "hrs";
  socialLast.innerHTML =
    "Yesterday: " + data[4].timeframes.daily.previous + "hrs";
  selfTime.innerHTML = data[5].timeframes.daily.current + "hrs";
  selfLast.innerHTML =
    "Yesterday: " + data[5].timeframes.daily.previous + "hrs";
}

function appendDataWeekly(data) {
  workTime.innerHTML = data[0].timeframes.weekly.current + "hrs";
  workLast.innerHTML =
    "Last week: " + data[0].timeframes.weekly.previous + "hrs";
  playTime.innerHTML = data[1].timeframes.weekly.current + "hrs";
  playLast.innerHTML =
    "Last week: " + data[1].timeframes.weekly.previous + "hrs";
  studyTime.innerHTML = data[2].timeframes.weekly.current + "hrs";
  studyLast.innerHTML =
    "Last week: " + data[2].timeframes.weekly.previous + "hrs";
  exerciseTime.innerHTML = data[3].timeframes.weekly.current + "hrs";
  exerciseLast.innerHTML =
    "Last week: " + data[3].timeframes.weekly.previous + "hrs";
  socialTime.innerHTML = data[4].timeframes.weekly.current + "hrs";
  socialLast.innerHTML =
    "Last week: " + data[4].timeframes.weekly.previous + "hrs";
  selfTime.innerHTML = data[5].timeframes.weekly.current + "hrs";
  selfLast.innerHTML =
    "Last week: " + data[5].timeframes.weekly.previous + "hrs";
}

function appendDataMonthly(data) {
  workTime.innerHTML = data[0].timeframes.monthly.current + "hrs";
  workLast.innerHTML =
    "Last month: " + data[0].timeframes.monthly.previous + "hrs";
  playTime.innerHTML = data[1].timeframes.monthly.current + "hrs";
  playLast.innerHTML =
    "Last month: " + data[1].timeframes.monthly.previous + "hrs";
  studyTime.innerHTML = data[2].timeframes.monthly.current + "hrs";
  studyLast.innerHTML =
    "Last month: " + data[2].timeframes.monthly.previous + "hrs";
  exerciseTime.innerHTML = data[3].timeframes.monthly.current + "hrs";
  exerciseLast.innerHTML =
    "Last month: " + data[3].timeframes.monthly.previous + "hrs";
  socialTime.innerHTML = data[4].timeframes.monthly.current + "hrs";
  socialLast.innerHTML =
    "Last month: " + data[4].timeframes.monthly.previous + "hrs";
  selfTime.innerHTML = data[5].timeframes.monthly.current + "hrs";
  selfLast.innerHTML =
    "Last month: " + data[5].timeframes.monthly.previous + "hrs";
}

function daily() {
  times[0].classList.add("active");
  times[1].classList.remove("active");
  times[2].classList.remove("active");
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendDataDaily(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

function weekly() {
  times[0].classList.remove("active");
  times[1].classList.add("active");
  times[2].classList.remove("active");
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendDataWeekly(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

function monthly() {
  times[0].classList.remove("active");
  times[1].classList.remove("active");
  times[2].classList.add("active");
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendDataMonthly(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}
