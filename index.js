const slides = document.querySelectorAll('.testimonialslide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let interval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    showSlide(parseInt(dot.getAttribute('dataslide')));
    interval = setInterval(nextSlide, 5000);
  });
});

const video=document.getElementById("videopreview");
const playButton=document.getElementById("videocontrol");
const icon=document.querySelector('i');
playButton.addEventListener("click",()=>{
    if(video.paused){
        video.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }else{
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});

const formContainer = document.getElementById("contactform");
const form = formContainer.querySelector("form");    
const modal = document.getElementById("cmodal");
    const closemodal = document.getElementById("closemodal");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.checkValidity()) {
        modal.style.display = "flex";
        form.reset();
      }
    });

    closemodal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });