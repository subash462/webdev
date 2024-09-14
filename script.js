
const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    images.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.children.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index < images.children.length - 1) ? index + 1 : 0;
    updateCarousel();
});


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    alert(`Thank you, ${name}! We have received your message: "${message}". We will contact you at ${email}.`);

   
    this.reset();
});
