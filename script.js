let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.progress');
  
    // Loop through each progress bar and set its width based on data-progress attribute
    progressBars.forEach(bar => {
      const progressValue = bar.getAttribute('data-progress');
      bar.style.width = progressValue + '%';
    });
  });
  