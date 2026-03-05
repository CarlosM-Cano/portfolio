function initCarousel(carousel, images) {
  const track = carousel.querySelector('.carousel-track');

  // Inject images
  track.innerHTML = images.map((src, i) => `
    <li class="carousel-slide">
      <img src="${src}" alt="Project image ${i+1}">
    </li>
  `).join('');

  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  let currentIndex = 0;

  function updateSlide(index) {
    track.style.transform = 'translateX(-' + (index * (100 / 3)) + '%)';
    currentIndex = index;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  // Swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) nextButton.click();
    if (endX > startX + 50) prevButton.click();
  });
}
