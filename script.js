document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  document.querySelector('.desktop-nav').classList.toggle('open');
  menuButton.setAttribute('aria-expanded', menuButton.getAttribute('aria-expanded') !== 'true');
});
