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

console.log("Blog page connected to Firebase");
const blogRef = ref(db, "blogs");

get(blogRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const blogs = snapshot.val();
      console.log(blogs);
    } else {
      console.log("No blogs found");
    }
  })
  .catch((error) => {
    console.log(error);
  });
