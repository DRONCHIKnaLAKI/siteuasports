// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1T5O-dktACGcUZvGbbPxQHcLY8Ljmo8Y",
  authDomain: "activeua-87a2f.firebaseapp.com",
  projectId: "activeua-87a2f",
  storageBucket: "activeua-87a2f.firebasestorage.app",
  messagingSenderId: "441222831178",
  appId: "1:441222831178:web:b79cf76377bf5b444c9ab3",
  measurementId: "G-JM1QN95H4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация карты
const map = L.map('app').setView([50.45, 30.52], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Загрузка данных
db.collection("activities").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    L.marker([data.coords.lat, data.coords.lng])
      .addTo(map)
      .bindPopup(`<b>${data.name}</b><br>${data.address}`);
  });
});
