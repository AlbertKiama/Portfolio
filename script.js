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

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  /*====================humbuger================*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

     hamburger.addEventListener("click", mobileMenu);

     function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
       }

// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
       hamburger.classList.remove("active");
       navMenu.classList.remove("active");
    }