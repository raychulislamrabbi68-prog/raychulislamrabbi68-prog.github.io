import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
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

console.log("✅ Firebase Connected");
// ===============================
// Cloudinary Image Upload
// ===============================

const cloudName = "cxrdogvs";
const uploadPreset = "blog_upload";

const uploadBtn = document.getElementById("uploadBtn");
const imageInput = document.getElementById("image");
const imagePreview = null;

let imageURL = "";

if (uploadBtn) {

  uploadBtn.addEventListener("click", () => {

    const file = imageInput.files[0];

    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);


    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData
    })

    .then(response => response.json())

    .then(data => {

      imageURL = data.secure_url;

      console.log("Cloudinary Image URL:", imageURL);

   

      alert("✅ Image Upload Successful");

    })

    .catch(error => {

      console.log(error);
      alert("❌ Image Upload Failed");

    });

  });

}
// ===============================
// Firebase Blog Save
// ===============================

const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const seoTitleInput = document.getElementById("seoTitle");
const metaDescriptionInput = document.getElementById("metaDescription");
const keywordsInput = document.getElementById("keywords");
const summaryInput = document.getElementById("summary");
const contentEnInput = document.getElementById("contentEn");
const contentBnInput = document.getElementById("contentBn");
const status = document.getElementById("status");


uploadBtn.addEventListener("click", async () => {
console.log("Publish button clicked");
const title = titleInput.value.trim();
const category = categoryInput.value;
const seoTitle = seoTitleInput.value.trim();
const metaDescription = metaDescriptionInput.value.trim();
const keywords = keywordsInput.value.trim();
const summary = summaryInput.value.trim();
const contentEn = contentEnInput.value.trim();
const contentBn = contentBnInput.value.trim();

if (
    !title ||
    !category ||
    !seoTitle ||
    !metaDescription ||
    !keywords ||
    !summary ||
    !contentEn ||
    !contentBn ||
    !imageURL
){

        status.innerHTML = "Please complete all fields";
        return;

    }


    try {

        const blogRef = push(ref(db, "blogs"));

await set(blogRef, {
author: "Raychul Islam Rabbi",
    title: title,
    category: category,
    seoTitle: seoTitle,
    metaDescription: metaDescription,
    keywords: keywords,
    summary: summary,
    contentEn: contentEn,
    contentBn: contentBn,

    image: imageURL,
    date: new Date().toISOString()
updatedAt: new Date().toISOString()
});


        status.innerHTML = "✅ Blog Published Successfully";
titleInput.value = "";
categoryInput.value = "";
seoTitleInput.value = "";
metaDescriptionInput.value = "";
keywordsInput.value = "";

contentEnInput.value = "";
contentBnInput.value = "";

imageInput.value = "";
imageURL = "";

    } catch(error){

        console.log(error);

        status.innerHTML = "❌ Error Saving Blog";

    }


});
