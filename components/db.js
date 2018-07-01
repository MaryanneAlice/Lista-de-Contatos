import Firebase from 'firebase';
 let config = {
    apiKey: "***",
    authDomain: "***",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "***"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
