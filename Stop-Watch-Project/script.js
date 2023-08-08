// Stopwatch object
const stopwatch = {
    startTime: 0,
    running: false,
    elapsedTime: 0,
    interval: null,
    
    // Start the stopwatch
    start: function() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.running = true;
        this.interval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          this.updateTimer();
        }, 10);
      }
    },
    
    // Stop the stopwatch
    stop: function() {
      if (this.running) {
        clearInterval(this.interval);
        this.interval = null;
        this.running = false;
      }
    },
    
    // Reset the stopwatch
    reset: function() {
      this.elapsedTime = 0;
      this.updateTimer();
    },
    
    // Update the timer display
    updateTimer: function() {
      const milliseconds = Math.floor(this.elapsedTime % 1000 / 10);
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);
      
      const timerElement = document.getElementById('timer');
      timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
    }
  };
  
  // Utility function to pad single digits with leading zeros
  function pad(number) {
    return number.toString().padStart(2, '0');
  }
  
  // Event listeners for buttons
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  
  startButton.addEventListener('click', () => {
    stopwatch.start();
  });
  
  stopButton.addEventListener('click', () => {
    stopwatch.stop();
  });
  
  resetButton.addEventListener('click', () => {
    stopwatch.stop();
    stopwatch.reset();
  });
  