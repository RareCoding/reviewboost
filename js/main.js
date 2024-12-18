document.addEventListener('DOMContentLoaded', () => {
  // Cursor particles inside parallax
  const parallaxSection = document.querySelector('.parallax-section');
  const cursorEffect = document.querySelector('.cursor-effect');
  
  if (parallaxSection && cursorEffect) {
    parallaxSection.addEventListener('mousemove', (e) => {
      const particle = document.createElement('span');
      const size = Math.random() * 20 + 5;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.classList.add('cursor-particle');
      cursorEffect.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 800);
    });
  }

  // FAQ toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('open');
      const answer = q.nextElementSibling;
      if (q.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });

  // Info cards hover fix
  // Already handled by CSS transitions.

  // Real-time number count with blur once in view
  const customerCountEl = document.getElementById('customerCount');
  let hasCounted = false;
  function runCount() {
    let count = 0;
    const target = 197;
    const speed = 5;
    const counting = setInterval(() => {
      if (count < target) {
        count++;
        customerCountEl.textContent = count;
      } else {
        clearInterval(counting);
      }
    }, speed);
  }

  function checkVisibility() {
    if (!customerCountEl) return;
    const rect = customerCountEl.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && !hasCounted) {
      runCount();
      hasCounted = true;
    }
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // in case it's already in view

});
