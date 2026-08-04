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

const cloudName = "cxrdogvs";
const uploadPreset = "blog_upload";

let imageBnURL = "";
let imageEnURL = "";

const titleBn = document.getElementById("titleBn");
const titleEn = document.getElementById("titleEn");

const categoryBn = document.getElementById("categoryBn");
const categoryEn = document.getElementById("categoryEn");

const seoTitleBn = document.getElementById("seoTitleBn");
const seoTitleEn = document.getElementById("seoTitleEn");

const metaDescriptionBn = document.getElementById("metaDescriptionBn");
const metaDescriptionEn = document.getElementById("metaDescriptionEn");

const keywordsBn = document.getElementById("keywordsBn");
const keywordsEn = document.getElementById("keywordsEn");

const summaryBn = document.getElementById("summaryBn");
const summaryEn = document.getElementById("summaryEn");

const contentBn = document.getElementById("contentBn");
const contentEn = document.getElementById("contentEn");

const imageBn = document.getElementById("imageBn");
const imageEn = document.getElementById("imageEn");

const uploadBtnBn = document.getElementById("uploadBtnBn");
const uploadBtnEn = document.getElementById("uploadBtnEn");

const publishBtn = document.getElementById("publishBtn");
const status = document.getElementById("status");

console.log("✅ Firebase Connected");
async function uploadImage(file) {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData
    }
  );

  const data = await response.json();

  if (!data.secure_url) {
    throw new Error("Image upload failed");
  }

  return data.secure_url;
}


uploadBtnBn.addEventListener("click", async () => {

  if (!imageBn.files[0]) {
    alert("বাংলা Image নির্বাচন করুন");
    return;
  }

  try {

    imageBnURL = await uploadImage(imageBn.files[0]);

    alert("✅ বাংলা Image Upload Complete");

    console.log(imageBnURL);

  } catch (error) {

    console.log(error);

    alert("❌ বাংলা Image Upload Failed");

  }

});


uploadBtnEn.addEventListener("click", async () => {

  if (!imageEn.files[0]) {
    alert("Select English Image");
    return;
  }

  try {

    imageEnURL = await uploadImage(imageEn.files[0]);

    alert("✅ English Image Upload Complete");

    console.log(imageEnURL);

  } catch (error) {

    console.log(error);

    alert("❌ English Image Upload Failed");

  }

});
publishBtn.addEventListener("click", async () => {

  const blogData = {

    author: "Raychul Islam Rabbi",

    titleBn: titleBn.value.trim(),
    titleEn: titleEn.value.trim(),

    categoryBn: categoryBn.value,
    categoryEn: categoryEn.value,

    seoTitleBn: seoTitleBn.value.trim(),
    seoTitleEn: seoTitleEn.value.trim(),

    metaDescriptionBn: metaDescriptionBn.value.trim(),
    metaDescriptionEn: metaDescriptionEn.value.trim(),

    keywordsBn: keywordsBn.value.trim(),
    keywordsEn: keywordsEn.value.trim(),

    summaryBn: summaryBn.value.trim(),
    summaryEn: summaryEn.value.trim(),

    contentBn: contentBn.value.trim(),
    contentEn: contentEn.value.trim(),

    imageBn: imageBnURL,
    imageEn: imageEnURL,

    date: new Date().toISOString(),
    updatedAt: new Date().toISOString()

  };

  for (const key in blogData) {

    if (
      key !== "author" &&
      key !== "date" &&
      key !== "updatedAt" &&
      !blogData[key]
    ) {

      status.innerHTML = "❌ Please complete all fields.";
      return;

    }

  }
