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
const successMessage = document.getElementById("successMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                contactForm.reset();

                successMessage.textContent = "✅ Thank you! Your message has been sent.";

                successMessage.classList.remove("show");
                void successMessage.offsetWidth;
                successMessage.classList.add("show");

                setTimeout(() => {
                    successMessage.classList.remove("show");
                }, 5000);

            } else {

                successMessage.textContent = "❌ Something went wrong. Please try again.";
                successMessage.classList.add("show");

            }

        } catch (error) {

            successMessage.textContent = "❌ Network error. Please try again.";
            successMessage.classList.add("show");

        }

    });

}
const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach(link => {
    link.onclick = function(){
        sideMenu.classList.remove("active");
        menuBtn.classList.remove("open");
        overlay.classList.remove("active");
    }
});
