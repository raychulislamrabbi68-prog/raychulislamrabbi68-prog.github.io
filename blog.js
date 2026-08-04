alert("Blog JS Loaded");
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
alert("Firebase Connected");
const blogContainer = document.getElementById("blog-container");

const banglaBtn = document.getElementById("banglaBtn");
const englishBtn = document.getElementById("englishBtn");

console.log(banglaBtn);
console.log(englishBtn);

let allBlogs = [];


get(ref(db, "blogs"))
.then((snapshot)=>{
console.log(snapshot.val());
if(snapshot.exists()){

allBlogs = Object.values(snapshot.val());

showBlogs("bn");

}else{

blogContainer.innerHTML = "<h2>No Blog Found</h2>";

}

})
.catch((error)=>{

console.log(error);

blogContainer.innerHTML = "<h2>Error Loading Blog</h2>";

});



function showBlogs(language){

blogContainer.innerHTML = "";


allBlogs.forEach((blog)=>{

let title = "";
let summary = "";
let content = "";


if(language === "en"){

title = blog.titleEn;
summary = blog.summaryEn;
content = blog.contentEn;

}else{

title = blog.titleBn;
summary = blog.summaryBn;
content = blog.contentBn;

}


blogContainer.innerHTML += `

<div class="blog-card">

<img src="${language === "en" ? blog.imageEn : blog.imageBn}" alt="Blog Image">
<h2>${title}</h2>

<p>${summary}</p>

<p>${content}</p>

</div>

`;

});


}


banglaBtn.addEventListener("click",()=>{

document.getElementById("language-select").style.display = "none";
blogContainer.style.display = "block";

showBlogs("bn");

});


englishBtn.addEventListener("click",()=>{

document.getElementById("language-select").style.display = "none";
blogContainer.style.display = "block";

showBlogs("en");

});
