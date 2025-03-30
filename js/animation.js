window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        fadeElements.forEach(function (element) {
            let elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
