let sec = 20;
const timerText = document.getElementById("timer");
const timer = setInterval(() => {
    timerText.textContent = sec;
    sec = sec - 1;
    if (sec === 0) {
        clearInterval(timer);
        timerText.textContent = "time is up!!!!!!!!"
    }
}, 1000);





