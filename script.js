// Side-Bar
const bar = document.getElementById("bar-icon");
const exit = document.getElementById("exit");
const toggleMenu = document.querySelector(".toggle-bar");

bar.addEventListener('click', () => {
    toggleMenu.style.display = 'flex';
});

exit.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
})

const images = [
    "Samsung-Galaxy-S24-Ultra-Titanium-Violet-Smartphone-transparent-PNG-image.png",
    "laptop.png",
    "camera.png"
]

const image = document.getElementById("image");

let index = 0;

function slideImage() {
    image.src = images[index];

    image.style.animation = "none";
    image.offsetHeight;
    image.style.animation = "fade 0.5s ease-in-out";

    index = (index + 1) % images.length

    if (index >= images.length) {
        index = 0;
    }
} 

slideImage();

setInterval(slideImage, 5000);

// FAQ Section
const arrow = document.querySelectorAll(".arrow");
const faqData = document.querySelectorAll(".faq-data");

arrow.forEach((arr, faq) => {
    arr.addEventListener("click", () => {
        faqData[faq].classList.toggle("active")
    })
});