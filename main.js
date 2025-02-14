import './style.css'
import { Separator } from '@radix-ui/react-separator';

const animeImages = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXHSyxH32QD0yoiZGoH8oSpQOWrJn0rYJKw&s',
    title: 'Bleach'
  },
  {
    url: 'https://m.media-amazon.com/images/I/619RmKdoIiL._AC_UF1000,1000_QL80_.jpg',
    title: 'Mokida'
  },
  {
    url: 'https://cdn.leonardo.ai/users/a482cc8c-f5e8-4326-8038-82c383032a5a/generations/732d0b53-2fa3-4b74-8805-5419bebb73f9/Leonardo_Phoenix_09_Anime_Knight_90s_style_3.jpg',
    title: 'Fate Zero'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9viQU73u_m0AS9iIXpzkjzCNlI_Dp6Wr0Jw&s',
    title: 'One Piece'
  },
  {
    url: 'https://cdn.leonardo.ai/users/a482cc8c-f5e8-4326-8038-82c383032a5a/generations/7ca39232-b6ba-47f7-839e-174df2041761/Leonardo_Phoenix_09_Gon_from_hunter_x_hunter_0.jpg',
    title: 'Gunzo'
  }
];

const App0 = document.querySelector('#app').innerHTML = `
  <div class="header">
    <h1>Animpedia</h1>
    <h2>Most Trending</h2>
    <Separator orientation="horizontal" />
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
    <input type="text" id="searchBar" placeholder="Search anime..." />
<div class="category-section">
  <button class="category-btn" data-category="all">All A-Z</button>
  <button class="category-btn" data-category="action" onclick="document.getElementById(Modal).style.display='block'">Categories</button>
</div>
<div class="modal" id="Modal">
<div class="modal-content">
<div>
    Vey
  </div>
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

export default App0;