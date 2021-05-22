/* import '../src/style.css'; */

const refs = {
    daysRef : document.querySelector('span[data-value = days]'),
    hoursRef : document.querySelector('span[data-value = hours]'),
    minsRef : document.querySelector('span[data-value = mins]'),
    secsRef : document.querySelector('span[data-value = secs]'),
}

class CountdownTimer {
    constructor(selector, targetDate) {
       this.intervalId = null;
       this.selector = selector;
       this.targetDate = targetDate; 
    
}

start(newTimer) {
    this.intervalId = setInterval(() => {
        const currentTime = Date.now();  
        const startTime = this.targetDate;
        const time = startTime - currentTime;
    newTimer(time);
    }, 1000);
}
}

const startTime = new Date('May 25, 2021');
const timer = new CountdownTimer('#timer1', startTime);

timer.start(updateValues);

function updateValues(time) {
   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

updateClockFace(days, hours, mins, secs);
}

function pad(value) {
   return String(value).padStart(2, '0');
}

function updateClockFace(days, hours, mins, secs) {
    refs.daysRef.textContent = days;
    refs.hoursRef.textContent = hours;
    refs.minsRef.textContent = mins;
    refs.secsRef.textContent = secs;
}



