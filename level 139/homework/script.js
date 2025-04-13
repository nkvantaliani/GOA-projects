function startCountdown() {
    const input = document.getElementById('dateInput').value;
    const countdownEl = document.getElementById('countdown');
  
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`${currentYear}-${input}T00:00:00`);
  
    if (isNaN(targetDate)) {
      countdownEl.innerText = "enter valid time";
      return;
    }
  
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        countdownEl.innerText = "ended";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      countdownEl.innerText = `${days} day, ${hours} hours, ${minutes} mins, ${seconds} secs`;
    }
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }
  