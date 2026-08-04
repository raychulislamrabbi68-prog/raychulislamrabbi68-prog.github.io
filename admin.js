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
