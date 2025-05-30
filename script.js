// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scroll and close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// About Me button pulse effect handled by CSS

// Typewriter effect for intro text
const introText = "I build cool websites and solve problems with code!";
let i = 0;
function typeWriter() {
  if (i < introText.length) {
    document.getElementById('intro-text').textContent += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = typeWriter;

// Modal for project details
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.open-modal-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    modalTitle.textContent = card.getAttribute('data-title');
    modalDesc.textContent = card.getAttribute('data-desc');
    modalLink.href = card.getAttribute('data-link');
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
