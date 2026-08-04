import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCirzx_QMyloG6ummoNBtRzhrgxfjcvevs",
  authDomain: "raychul-islam-rabbi-website.firebaseapp.com",
  databaseURL: "https://raychul-islam-rabbi-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "raychul-islam-rabbi-website",
  storageBucket: "raychul-islam-rabbi-website.firebasestorage.app",
  messagingSenderId: "1043773920946",
  appId: "1:1043773920946:web:750dcb149d29f354cddbab"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const blogContainer = document.getElementById("blog-container");

const blogRef = ref(db, "blogs");

get(blogRef)
.then((snapshot) => {

  if (snapshot.exists()) {

    const blogs = snapshot.val();

    blogContainer.innerHTML = "";

    Object.values(blogs).forEach((blog) => {
const id = Date.now();
      blogContainer.innerHTML += `

      <div class="blog-card">

        <img src="${blog.image}" alt="Blog Image">

        <h2>${blog.title}</h2>

<p>${blog.summary}</p>

<div>
<button onclick="showEnglish('${blog.contentEn}','${id}')">
🇺🇸 English
</button>

<button onclick="showBangla('${blog.contentBn}','${id}')">
🇧🇩 বাংলা
</button>

<p id="languageText-${id}">
${blog.contentBn}
</p>


      </div>

      `;

    });

  } else {

    blogContainer.innerHTML = "<h2>No Blog Found</h2>";

  }

})
.catch((error) => {

  console.log(error);

  blogContainer.innerHTML = "<h2>Error Loading Blog</h2>";

});
window.showEnglish = function(text,id){

document.getElementById(`languageText-${id}`).innerHTML = text;

}


window.showBangla = function(text,id){

document.getElementById(`languageText-${id}`).innerHTML = text;

}
