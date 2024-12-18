document.addEventListener('DOMContentLoaded', () => {
  // Cursor particles
  const cursorEffect = document.querySelector('.cursor-effect');
  const colors = ['#4b6cb7', '#182848', '#0e1f56'];
  
  document.addEventListener('mousemove', (e) => {
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

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('open');
      let answer = q.nextElementSibling;
      if (q.classList.contains('open')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Cursor particles
  const cursorEffect = document.querySelector('.cursor-effect');
  const colors = ['#4b6cb7', '#182848', '#0e1f56'];
  
  document.addEventListener('mousemove', (e) => {
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

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('open');
      let answer = q.nextElementSibling;
      if (q.classList.contains('open')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});
