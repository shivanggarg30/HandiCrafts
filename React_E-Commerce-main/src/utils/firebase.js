import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, persistentLocalCache, initializeFirestore, persistentSingleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage

const firebaseConfig = {
    apiKey: "AIzaSyDXS9UltNJeBzTfS5NPUrHyJFrTx5ytye8",
    authDomain: "seller-dashboard-bfc03.firebaseapp.com",
    projectId: "seller-dashboard-bfc03",
    storageBucket: "seller-dashboard-bfc03.firebasestorage.app",
    messagingSenderId: "276359251321",
    appId: "1:276359251321:web:3454d21d69526dae285ba8",
    measurementId: "G-DGWX4WRNLB"
};

const app = initializeApp(firebaseConfig);

initializeFirestore(app, {
    localCache: persistentLocalCache(/*settings*/{tabManager: persistentSingleTabManager()})
  });

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Export getStorage
export { firebaseConfig }; // Export firebaseConfig!!!


