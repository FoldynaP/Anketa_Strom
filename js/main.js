//CHANGE BACKGROUND//
function changeBg(){
    let images = ['linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url("/img/treeheader.jpg")','linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url("/img/carousel1.jpg")'];
    let section = document.getElementById('headersection');
    let bg = images[Math.floor(Math.random() *images.length)];
    section.style.backgroundImage = bg;
  }
   setInterval(changeBg, 5000);
//NAVBAR SCROLL
const links = document.querySelectorAll(".nav-link");
links.forEach((item)=>{
    item.addEventListener("click", () =>{
      const el = document.getElementById(item.getAttribute("data-link"));
      el.scrollIntoView({behavior:"smooth", block:"start"})
    })
})
//RESPONSIVE NAVBAR//
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
  //STICKY NAVBAR
  window.addEventListener("scroll", function(){
    const topnav = document.querySelector(".topnav");
    const logo = document.querySelector(".logo");
    topnav.classList.toggle("sticky", window.scrollY > 100);
    logo.classList.toggle("sticky", window.scrollY > 100);
  })

  
