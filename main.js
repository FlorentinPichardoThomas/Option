import './style.css'

const animeImages = [
  {
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    title: 'Anime Scenery'
  },
  {
    url: 'https://images.unsplash.com/photo-1565204256578-db2626bf8420?auto=format&fit=crop&w=800&q=80',
    title: 'Japanese Temple'
  },
  {
    url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=800&q=80',
    title: 'Cherry Blossoms'
  },
  {
    url: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80',
    title: 'Tokyo Night'
  },
  {
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    title: 'Japanese Garden'
  }
];

document.querySelector('#app').innerHTML = `
  <div class="header">
    <h1>Anime Gallery</h1>
  </div>
  <div class="slideshow-container">
    ${animeImages.map((image, index) => `
      <div class="slide ${index === 0 ? 'active' : ''}">
        <img src="${image.url}" alt="${image.title}">
        <div class="slide-title">${image.title}</div>
      </div>
    `).join('')}
    <button class="prev-btn">←</button>
    <button class="next-btn">→</button>
    <div class="dots-container">
      ${animeImages.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
      `).join('')}
    </div>
  </div>
`;

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Event listeners
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.dataset.index);
    showSlide(currentSlide);
  });
});

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);