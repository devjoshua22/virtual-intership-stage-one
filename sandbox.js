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
     const utcTime = date.getTime()
  
     milliSecond.innerText = utcTime
}
currentDayDisplay();
currentTimeDisplay();
setInterval(currentTimeDisplay,100);