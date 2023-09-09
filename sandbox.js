const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const milliSecond = document.getElementById('millisecond')
const currentDay = document.getElementById('current-day-of-the-week');
const currentTime = document.getElementById('current-complete-time');
let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function currentDayDisplay(){
    const date = new Date();
    const dayOfTheWeek = date.getDay()
    currentDay.innerText =week [dayOfTheWeek-1]
    
}

function currentTimeDisplay(){
    const date = new Date();
    year.innerText = date.getFullYear()
     month.innerText = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1.
     day.innerText = String(date.getDate()).padStart(2, '0');
    hour.innerText = String(date.getHours()).padStart(2, '0');
     minute.innerText = String(date.getMinutes()).padStart(2, '0');
     second.innerText = String(date.getSeconds()).padStart(2, '0');
     milliSecond.innerText = String(date.getMilliseconds()).padStart(3, '0');
}
currentDayDisplay();
currentTimeDisplay();
setInterval(currentTimeDisplay,100);