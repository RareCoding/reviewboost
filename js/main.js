document.addEventListener('DOMContentLoaded', () => {
  // Cursor particles only inside parallax section
  const parallaxSection = document.querySelector('.parallax-section');
  const cursorEffect = document.querySelector('.cursor-effect');
  const colors = ['#ffffff', '#dadada', '#b0b0b0'];

  if (parallaxSection && cursorEffect) {
    parallaxSection.addEventListener('mousemove', (e) => {
      const particle = document.createElement('span');
      const size = Math.random() * 20 + 5;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.background = colors[Math.floor(Math.random()*colors.length)];
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.classList.add('cursor-particle');

      cursorEffect.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    });
  }

  // FAQ toggle smooth drop down
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('open');
      const answer = q.nextElementSibling;
      if (q.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });

  // Hover cards (Verified Quality, etc.) animate back down on mouse leave
  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach(card => {
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
