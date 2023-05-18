let startingMinutes = .1;
let time = startingMinutes * 60;
const indicator = document.getElementById("indicator");

let work = true;

const countdownEl = document.getElementById("countdown");

setInterval(TaskCountDown, 1000);

let mySound = new Audio('alarmSound.mp4');

function TaskCountDown(){

if (work == true)
{
    if (time == -1)
    {
        indicator.innerHTML = "Break!";
        
        time = startingMinutes * 60;
        startingMinutes = .1;
        work = false;

    } else {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
      }

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    console.log(time + 1);
}
}

if (work == false)
{
    if (time == -1)
    {
        indicator.innerHTML = "Work!";
        
        time = startingMinutes * 60;
        startingMinutes = .1;
        work = true;

    } else {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
      }

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    console.log(time + 1);
    }


}


}
