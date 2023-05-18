
const taskInput = document.getElementById("taskInput");
const timeInput = document.getElementById("timeInput");

const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

let mySound = new Audio('alarmSound.mp4');


submit.addEventListener("click", () => {

    task.innerHTML = taskInput.value;
    var x = document.getElementById("Begin");
    var y = document.getElementById("TimerRuns");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

    let startingMinutes = 25;
    let time = startingMinutes * 60;
    const indicator = document.getElementById("task");
    
    let work = true;

    let longbreakCount = 3;
    let longbreak = false;

    const countdownEl = document.getElementById("demo");
    
let loops = Math.floor(timeInput.value / 25);

if (loops <= 1)
{
  loops = 1;
}
    setInterval(TaskCountDown, 1000);
    
function TaskCountDown(){

if (loops == 0)
{
  return;
}

if (work == true)
{

if (time == -1)
{ 
  mySound.play();

  if (longbreakCount > 0)
  {
  longbreakCount--;
  longbreak = false;
  } else if (longbreakCount == 0)
  {
    longbreakCount = 3;
    longbreak = true;
  }


if (longbreak == false)
{
  console.log("Break!");
  indicator.innerHTML = "Break!";
  startingMinutes = 5;    
  time = startingMinutes * 60;
  
  work = false;
} else if (longbreak == true)
{
  console.log("Long Break!");
  indicator.innerHTML = "Long Break!";

  startingMinutes = 20;          
  time = startingMinutes * 60;

  work = false;
  

}

} else {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  
if (seconds < 10) 
{
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
  mySound.play();
  indicator.innerHTML = taskInput.value;

  startingMinutes = 25;          
  time = startingMinutes * 60;

  loops--;
  work = true;
  console.log("TASK!");
  console.log("LOOPS: " + loops);
  console.log("Long Break Count: " + longbreakCount)
} else {
  
let minutes = Math.floor(time / 60);
let seconds = time % 60;
  
if (seconds < 10) 
{
  seconds = "0" + seconds;
}
  
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  console.log(time + 1);

}  
}

}


});

cancel.addEventListener("click", () => {

  task.innerHTML = taskInput.value;
  var x = document.getElementById("Begin");
  var y = document.getElementById("TimerRuns");
  if (x.style.display === "block") {
  x.style.display = "none";
    y.style.display = "block";
} else {
  x.style.display = "block";
  y.style.display = "none";
}
location.reload();
});
