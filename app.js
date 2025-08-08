// Конфиг Firebase (замените на свой!)
const firebaseConfig = {
  apiKey: "pk.eyJ1IjoiZHJvbmxveCIsImEiOiJjbWUyaTQ3YTAwbmVhMmpzYnV2bTZiaWQ2In0.S9mgehHOOA-z6X7yU2vxvQ",
  authDomain: "active-ua.firebaseapp.com",
  projectId: "active-ua",
  storageBucket: "active-ua.appspot.com"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
