/* Carousel animation for tools */
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel .col-auto');

  // Clone images for seamless looping
  const clones = Array.from(images).map((img) => {
    const clone = img.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    return clone;
  });

  // Append clones
  carousel.append(...clones);

  // Adjust animation speed based on screen size
  function adjustAnimationSpeed() {
    const speed =
      window.innerWidth < 480
        ? 15 // Faster on small screens
        : window.innerWidth < 768
        ? 15
        : window.innerWidth < 992
        ? 10
        : 10;
    carousel.style.animationDuration = `${speed}s`;
  }

  // Initial setup
  adjustAnimationSpeed();

  // Update on resize
  window.addEventListener('resize', function () {
    adjustAnimationSpeed();
  });
});
