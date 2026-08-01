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

const overlay = document.querySelector(".overlay");

menuBtn.onclick = function(){
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("active");
}

overlay.onclick = function(){
    sideMenu.classList.remove("active");
    menuBtn.classList.remove("open");
    overlay.classList.remove("active");
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(contactForm);

const response = await fetch(contactForm.action,{

method:"POST",

body:formData,

headers:{
"Accept":"application/json"
}

});

const successMessage=document.getElementById("successMessage");

if(response.ok){

successMessage.innerHTML = "✅ Thank you! Your message has been sent.";
successMessage.style.display = "block";

// Browser-কে আগে display:block প্রয়োগ করতে দাও
requestAnimationFrame(() => {
    successMessage.classList.add("show");
});

contactForm.reset();

setTimeout(() => {
    successMessage.classList.remove("show");

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 500);

}, 5000);

}else{

successMessage.style.display="block";

successMessage.style.color="red";

successMessage.innerHTML="❌ Something went wrong. Please try again.";

}

});

}
