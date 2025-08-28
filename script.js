function hideelement() {
const hamburg = document.getElementById('ham');
const log = document.getElementById('log');
const nav=document.getElementsByClassName('nav-2')
hamburg.style.display='none'
log.style.display='none'

for (let i = 0; i < nav.length; i++) {
      nav[i].style.display = 'flex';
  }


}
function back() {
    const hamburg = document.getElementById('ham');
    const nav = document.getElementsByClassName('nav-2');
    const log = document.getElementById('log');
    hamburg.style.display = 'flex'; 
    log.style.display='flex'

    Array.from(nav).forEach(element => {
      element.style.display = 'none';
    });
  };



function openmodal() {
      document.getElementById("loginModal").style.display = "flex";
    }
    function closeModal() {
      document.getElementById("loginModal").style.display = "none";
    }
    window.onclick = function(event) {
      const modal = document.getElementById("loginModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

const slider = document.getElementById("slider");
const slides = slider.children;
const totalSlides = slides.length;

let currentIndex = 0;


slider.style.width = `${100 * totalSlides}%`;
for (let img of slides) {
    img.style.width = `${100 / totalSlides}%`;
}

function showSlide(index) {
    slider.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000); 

 const feature = document.querySelector(".feature");
  const items = document.querySelectorAll(".feature > div");
  let index = 0;

  if (window.innerWidth <= 440) {
    setInterval(() => {
      index = (index + 1) % items.length;

      feature.scrollTo({
        left: index * feature.clientWidth, // move by container width
        behavior: "smooth"
      });
    }, 3000);
  }