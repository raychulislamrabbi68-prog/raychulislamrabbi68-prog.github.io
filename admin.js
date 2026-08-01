import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

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

      if (imagePreview) {
        imagePreview.src = imageURL;
      }

      alert("✅ Image Upload Successful");

    })

    .catch(error => {

      console.log(error);
      alert("❌ Image Upload Failed");

    });

  });

}
