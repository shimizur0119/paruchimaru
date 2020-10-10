importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAzdXlRZNwJ8ooAVUkyP3K3qFBz5AUMzHg",
  authDomain: "develop-542b4.firebaseapp.com",
  databaseURL: "https://develop-542b4.firebaseio.com",
  projectId: "develop-542b4",
  storageBucket: "develop-542b4.appspot.com",
  messagingSenderId: "103556982071",
  appId: "1:103556982071:web:839a31a6a2e8ba949026b2",
  measurementId: "G-FP4JPN8X3L"
});

const messaging = firebase.messaging();

console.log("firebase-messaging-sw.js!!")

messaging.onBackgroundMessage((payload) => {
  console.log('Backgroound!!. ', payload);
});