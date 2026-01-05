const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links-mobile');
btn.addEventListener('click', ()=>{
  console.log("clicked");
  nav.classList.toggle("active");
});