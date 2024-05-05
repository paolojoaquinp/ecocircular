import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Beta
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAZ0XynHP6oQqlyxqqffLLbG0sQ3nJ3voI",
    authDomain: "economia-circular-70827.firebaseapp.com",
    projectId: "economia-circular-70827",
    storageBucket: "economia-circular-70827.appspot.com",
    messagingSenderId: "363358185388",
    appId: "1:363358185388:web:32b643a266bd5156a3fc09"
  };
  


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

let perf;
// Initialize Firebase
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  perf = getPerformance(app);
}
export { analytics, perf };