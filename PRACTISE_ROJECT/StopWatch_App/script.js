let timer;
let seconds = 0;
let isRunning = false;

const display = document.querySelector(".display");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

// Format and show time
function updateDisplay(){
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.textContent = 
    `${hrs.toString().padStart(2,"0")}:`+
    `${mins.toString().padStart(2,"0")}:`+
    `${secs.toString().padStart(2,"0")}`;
}

// Start button
startBtn.addEventListener("click",()=>{
    if(!isRunning){
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        },1000);
    }
});

// stop button
stopBtn.addEventListener("click",()=>{
    clearInterval(timer);
    isRunning = false;
});

//reset button
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
});