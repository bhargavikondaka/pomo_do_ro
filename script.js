let timerbutton = document.getElementById("playButton");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("seconds");
let image = document.getElementById("pomodoro");
let timer = parseInt(minutes.textContent);
let date = new Date();
let startTime = date.getMinutes();
let totalTime = timer * 60;
//seconds.textContent = 'time in seconds: ' + totalTime;
console.log(totalTime);
console.log(startTime);
let count = 0;
timerbutton.addEventListener("click", function() {
    let breakPoint = setInterval(() => {
        count += 1;
        // console.log(count);

        seconds.textContent = totalTime - count;
        let s = seconds.textContent;
        timerbutton.textContent = "time in seconds :" + s;
        if (count === totalTime) {
            console.log("breaked");
            timerbutton.textContent = "Time is Up...!👏 :";
            alert("Good Job");
            clearInterval(breakPoint);
        }

    }, 1000);
});

let shortBreak = document.getElementById("shortBreak");
let focus = document.getElementById("focus");
let longBreak = document.getElementById("longBreak");

shortBreak.addEventListener("click", function() {
    minutes.textContent = "5:00 mins";
    seconds.textContent = "";
    timer = parseInt(minutes.textContent);
    totalTime = timer * 60;
});
focus.addEventListener("click", function() {
    minutes.textContent = "25:00 mins";
    seconds.textContent = "";
    timer = parseInt(minutes.textContent);
    totalTime = timer * 60;
});
longBreak.addEventListener("click", function() {
    minutes.textContent = "15:00 mins";
    seconds.textContent = "";
    timer = parseInt(minutes.textContent);
    totalTime = timer * 60;
}); 


let bgContainer = document.getElementById("bgContainer");

let taskInputEl=document.createElement("input");
taskInputEl.type="text";
taskInputEl.id="taskInput";
taskInputEl.placeholder="Enter your task here";
taskInputEl.classList.add("task-input");
//bgContainer.appendChild(taskInputEl);
