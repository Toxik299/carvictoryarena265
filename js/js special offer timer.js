// Countdown Timer for Special Offer
function startCountdown() {
  const offerEndDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days from now

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = offerEndDate - now;

    if (timeLeft < 0) {
      document.getElementById("countdown").innerHTML = "Offer Expired!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);
