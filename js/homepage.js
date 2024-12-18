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
