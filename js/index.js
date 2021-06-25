function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

 }

 const switchBtn = document.querySelector(".switch-btn");
 switchBtn.addEventListener("click", myFunction);