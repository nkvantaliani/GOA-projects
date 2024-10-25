function delayedMessage() {
    setTimeout(() => {
      document.getElementById("h1").textContent=("HIIIIIIIIIIII");
    }, 3000);
  }
delayedMessage()


function displayCurrentTime() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());
      const seconds = String(now.getSeconds());
      document.getElementById("p").textContent = hours;
      document.getElementById("p2").textContent = minutes;
      document.getElementById("p3").textContent = seconds;

    }, 1000);
}
displayCurrentTime()


const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C', '#3498DB'];

function changeBackgroundColor() {
  let currentIndex = 0; 
  setInterval(() => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, 3000); 
}
changeBackgroundColor();



let timer;
let seconds = 0;
let isRunning = false;

function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
});

document.getElementById('pauseButton').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    document.getElementById('timer').textContent = "00:00"; 
});


