
 function toggleMenu(){
    const menu= Document.queySelector(".menu-links");
    const icon=Document.querySelector(".hamurger-icon");
     menu.classlist.toggle("open");
    icon.classlist.toggle("open");   
  }

  //  certificates
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let index = 0;
    const totalSlides = document.querySelectorAll(".slide").length;
    const visibleSlides = 2; // Adjust based on how many should be seen at once
    const slideWidth = document.querySelector(".slide").offsetWidth + 20;
  
    nextBtn.addEventListener("click", () => {
      if (index < totalSlides - visibleSlides) {
        index++;
        carousel.style.transform = `translateX(-${index * slideWidth}px)`;
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * slideWidth}px)`;
      }
    });
  });
  
  
  
  