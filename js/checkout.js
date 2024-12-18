document.addEventListener('DOMContentLoaded', () => {
  const payNowBtn = document.getElementById('payNowBtn');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const cardNumber = document.getElementById('cardNumber');
  const expiry = document.getElementById('expiry');
  const cvc = document.getElementById('cvc');
  const email = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  payNowBtn.addEventListener('click', () => {
    let valid = true;
    [firstName, lastName, cardNumber, expiry, cvc, email].forEach(input => {
      input.classList.remove('error');
      if (input.value.trim() === '') {
        valid = false;
        input.classList.add('error');
      }
    });

    if(!valid) {
      errorMessage.textContent = "Please fill out all fields.";
      return;
    } else {
      errorMessage.textContent = "";
    }

    // Show loading overlay
    loadingOverlay.style.display = 'flex';
    // Simulate some delay for "authenticating"
    setTimeout(() => {
      alert("Payment successful! (This is just a demo.)");
      loadingOverlay.style.display = 'none';
    }, 3000);
  });
});
