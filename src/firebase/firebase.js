import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDdWsWOJwErKuatqBj1nfWPNyMdwouf7z0',
  authDomain: 'dictionary-ba7c7.firebaseapp.com',
  databaseURL: 'https://dictionary-ba7c7.firebaseio.com',
  storageBucket: 'dictionary-ba7c7.appspot.com',
  messagingSenderId: '910587645970'
};

let app = null;

function getFireBaseApp() {
  if (!app) {
    app = firebase.initializeApp(config);
  }

  return app;
}

getFireBaseApp().auth().onAuthStateChanged(function(user) {
  if (!user) {
    // User is signed out.
    if (location.pathname !== '/login'){
      location.assign('/login');
    }
  }
});

export default getFireBaseApp;
