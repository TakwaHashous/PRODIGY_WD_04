const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(`#${link.getAttribute('href').slice(1)}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


const body = document.body;
body.style.backgroundImage = "url('butterfly3.png'), url('flower.png')";
body.style.backgroundSize = "50px 50px, 20px 20px";
body.style.backgroundPosition = "0% 0%, 100% 100%";
body.style.backgroundRepeat = "repeat, repeat";

function animateBackground() {
  body.style.backgroundPosition = `-${Math.random() * 100}px 0%, ${Math.random() * 100}px 100%`;
  requestAnimationFrame(animateBackground);
}

