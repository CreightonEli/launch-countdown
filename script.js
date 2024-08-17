const dayElTop = document.querySelector(".day-el-top");
const dayElBot = document.querySelector(".day-el-bot");
const hourElTop = document.querySelector(".hour-el-top");
const hourElBot = document.querySelector(".hour-el-bot");
const minuteElTop = document.querySelector(".minute-el-top");
const minuteElBot = document.querySelector(".minute-el-bot");
const secondElTop = document.querySelector(".second-el-top");
const secondElBot = document.querySelector(".second-el-bot");

let currentSec = secondElTop.textContent;
let currentMin = minuteElTop.textContent;
let currentHour = hourElTop.textContent;
let currentDay = dayElTop.textContent;
let timeOut = false;

function tick() {
    if (timeOut === false) {
        currentSec -= 1;
        // updates displayed time
        if (String(currentSec).length === 1) { // checks if current time is 1 digit
            // set seconds
            secondElTop.textContent = `0${currentSec}`; // adds a leading zero
            secondElBot.textContent = `0${currentSec}`;
        }
        else {
            // set seconds
            secondElTop.textContent = currentSec;
            secondElBot.textContent = currentSec;
        }

        if (String(currentMin).length === 1) {
            // set minutes
            minuteElTop.textContent = `0${currentMin}`;
            minuteElBot.textContent = `0${currentMin}`;        
        }
        else {
            // set minutes
            minuteElTop.textContent = currentMin;
            minuteElBot.textContent = currentMin;
        }

        if (String(currentHour).length === 1) {
            // set hours
            hourElTop.textContent = `0${currentHour}`;
            hourElBot.textContent = `0${currentHour}`;        
        }
        else {
            // set hours
            hourElTop.textContent = currentHour;
            hourElBot.textContent = currentHour;
        }

        if (String(currentDay).length === 1) {
            // set days
            dayElTop.textContent = `0${currentDay}`;
            dayElBot.textContent = `0${currentDay}`;        
        }
        else {
            // set days
            dayElTop.textContent = currentDay;
            dayElBot.textContent = currentDay;
        }

        // check if zero //
        // if seconds reach zero
        if (currentSec === 0) {
            currentSec = 60; // resets the seconds
            currentMin -= 1;
        }
        // if minutes is zero
        if (currentMin === -1 && currentSec === 60) {
            currentMin = 59; // resets the minutes
            currentHour -= 1;
        }
        // if hours is zero
        if (currentHour === -1 && currentMin === 59) {
            currentHour = 59; // resets the minutes
            currentDay -= 1;
        }
        // if everything is zero then stop countdown
        if (currentDay === -1 && currentHour === 59 && currentMin === 59 && currentSec === 60) {
            timeOut = true;
        }
    }
}

setInterval(tick, 1000);