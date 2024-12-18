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

  document.addEventListener('DOMContentLoaded', () => {
  const orderCountEl = document.getElementById('orderCount');
  let count = 0;
  const target = 197; // current number of orders
  const speed = 20;

  const updateCount = () => {
    if (count < target) {
      count++;
      orderCountEl.textContent = count;
      setTimeout(updateCount, speed);
    } else {
      orderCountEl.textContent = target;
    }
  };
  
  updateCount();
});

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
  const reviewPackage = document.getElementById('reviewPackage');
  const starOptions = document.querySelectorAll('input[name="star"]');
  const aiOption = document.getElementById('aiOption');
  const userOption = document.getElementById('userOption');
  const reviewInstructionsLabel = document.getElementById('reviewInstructionsLabel');
  const reviewDetails = document.getElementById('reviewDetails');
  const finalPrice = document.getElementById('finalPrice');
  const payNowBtn = document.getElementById('payNowBtn');
  const loadingOverlay = document.getElementById('loadingOverlay');

  function updateInstructions() {
    if (aiOption.checked) {
      reviewInstructionsLabel.innerHTML = '<i class="fas fa-info-circle"></i> Enter details about your place to help the AI';
      reviewDetails.placeholder = "Describe your business...";
    } else {
      reviewInstructionsLabel.innerHTML = '<i class="fas fa-info-circle"></i> Put each review on a new line';
      reviewDetails.placeholder = "Write your reviews here, one per line...";
    }
  }

  aiOption.addEventListener('change', updateInstructions);
  userOption.addEventListener('change', updateInstructions);

  function calculatePrice() {
    const packageVal = reviewPackage.value;
    let price = 0;
    if (packageVal === '5') price = 15;
    if (packageVal === '10') price = 28;
    if (packageVal === '20') price = 50;
    if (packageVal === '50') price = 100;
    finalPrice.textContent = `$${price.toFixed(2)}`;
  }

  reviewPackage.addEventListener('change', calculatePrice);

  payNowBtn.addEventListener('click', () => {
    // Show loading overlay
    loadingOverlay.style.display = 'flex';
    // Simulate some delay
    setTimeout(() => {
      // In real scenario, proceed with payment auth
      alert("Payment successful! (This is just a demo.)");
      loadingOverlay.style.display = 'none';
    }, 3000);
  });

  // Initial setup
  updateInstructions();
  calculatePrice();
});
