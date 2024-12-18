document.addEventListener('DOMContentLoaded', () => {
  const reviewPackage = document.getElementById('reviewPackage');
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
    // Simulate some delay for "authenticating"
    setTimeout(() => {
      alert("Payment successful! (This is just a demo.)");
      loadingOverlay.style.display = 'none';
    }, 3000);
  });

  // Initial setup
  updateInstructions();
  calculatePrice();
});
