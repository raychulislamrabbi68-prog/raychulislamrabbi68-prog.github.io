document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(30px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 200);
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML="🌙 Dark Mode";
}
else{
    themeBtn.innerHTML="☀️ Light Mode";
}

}
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.onclick = function(){
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
}
