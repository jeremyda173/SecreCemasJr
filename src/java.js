const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Configurar el índice del carrusel
let currentIndex = 0;

// Agregar eventos click a los botones del carrusel
document.querySelector('#prevBtn').addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  updateSlidePosition();
});

document.querySelector('#nextBtn').addEventListener('click', () => {
  if (currentIndex === carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlidePosition();
});

// Actualizar la posición del carrusel
function updateSlidePosition() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
