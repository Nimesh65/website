const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links-mobile');

btn.addEventListener('click', () => {
  console.log("clicked");
  nav.classList.toggle("active");
});

// 🔽 HIDE MENU WHEN PAGE SCROLLS
window.addEventListener('scroll', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});
