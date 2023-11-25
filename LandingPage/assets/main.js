document.addEventListener("DOMContentLoaded", function() {
    const images = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"];
    const images2 = ["assets/1a.png", "assets/2a.png", "assets/3a.png", "assets/4a.png","assets/5a.png","assets/6a.png","assets/7a.png"];
    const carousel = document.querySelector(".carousel img");
    const carouse2 = document.querySelector(".carouse2 img");
    let currentIndex = 0;
    let currentIndex2 = 0;
    function changeImage() {
        carousel.style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(function() {
            carousel.src = images[currentIndex];
            carousel.style.opacity = 1;
        }, 1000);

        carouse2.style.opacity = 0;
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        setTimeout(function() {
            carouse2.src = images2[currentIndex2];
            carouse2.style.opacity = 1;
        }, 1000);
    }

    changeImage(); // Initial image

    setInterval(changeImage, 5000); // Change image every 5 seconds
});