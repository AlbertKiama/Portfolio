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

  
document.addEventListener('DOMContentLoaded', function() {
    // Select all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggleButton');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetDivId = this.getAttribute('data-target');
        const targetDiv = document.getElementById(targetDivId);
        
        // Hide all other divs
        document.querySelectorAll('.hiddenDiv').forEach(div => {
          if (div !== targetDiv) {
            div.style.display = 'none';
          }
        });

        // Remove the 'active' class from all buttons
         toggleButtons.forEach(btn => {
         btn.classList.remove('active');
        });

        // Toggle the clicked div's visibility
        if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
          targetDiv.style.display = 'block';
          this.classList.add('active'); // Add 'active' class to the clicked button
        } else {
          targetDiv.style.display = 'none';
          this.classList.remove('active'); // Remove 'active' class if div is hidden
        }
      });
    });
  });