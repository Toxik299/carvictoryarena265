// Countdown Timer Function
function startCountdown(targetDate) {
    function updateTimer() {
        let now = new Date().getTime();
        let distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "Offer Expired!";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

        setTimeout(updateTimer, 1000);
    }

    updateTimer();
}

// Set countdown to 48 hours from page load
let countdownEnd = new Date().getTime() + (48 * 60 * 60 * 1000);
startCountdown(countdownEnd);
