document.addEventListener('DOMContentLoaded', () => {
  const reviewCountInput = document.getElementById('reviewCount');
  const verifiedToggle = document.getElementById('verifiedToggle');
  const totalPriceEl = document.getElementById('totalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const userSourceRadio = document.getElementById('userSource');
  const aiSourceRadio = document.getElementById('aiSource');
  const userReviewsContainer = document.getElementById('userReviewsContainer');
  const starRatingInput = document.getElementById('starRating');
  const starDisplay = document.getElementById('starDisplay');

  function updateStarDisplay(value) {
    const stars = '★★★★★'.slice(0,value) + '☆☆☆☆☆'.slice(value);
    starDisplay.textContent = stars.slice(0,5);
  }

  if (starRatingInput && starDisplay) {
    starRatingInput.addEventListener('input', () => {
      updateStarDisplay(starRatingInput.value);
      calculatePrice();
    });
    updateStarDisplay(starRatingInput.value);
  }

  function calculatePrice() {
    const reviewCount = parseInt(reviewCountInput.value) || 0;
    const isVerified = verifiedToggle.checked;
    const starVal = parseInt(starRatingInput.value) || 5;

    // Base price: $2.50 per review
    let price = reviewCount * 2.5;

    // Add $0.50 per review if verified
    if (isVerified) {
      price += reviewCount * 0.5;
    }

    totalPriceEl.textContent = `$${price.toFixed(2)}`;
  }

  if (reviewCountInput) reviewCountInput.addEventListener('input', calculatePrice);
  if (verifiedToggle) verifiedToggle.addEventListener('change', calculatePrice);

  if (userSourceRadio && aiSourceRadio) {
    userSourceRadio.addEventListener('change', () => {
      if (userSourceRadio.checked) {
        userReviewsContainer.style.display = 'block';
      }
    });
    aiSourceRadio.addEventListener('change', () => {
      if (aiSourceRadio.checked) {
        userReviewsContainer.style.display = 'none';
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      // Validate or store data here
      window.location.href = 'checkout.html';
    });
  }

  calculatePrice();
});
