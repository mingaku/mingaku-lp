import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnxQRaH7WbrkXoig3imjNQUoMYPzKb78M",
  authDomain: "mingaku-lp.firebaseapp.com",
  projectId: "mingaku-lp",
  storageBucket: "mingaku-lp.firebasestorage.app",
  messagingSenderId: "178439288565",
  appId: "1:178439288565:web:2649ee705b674971aab7bc",
  measurementId: "G-GZZR5N4QST",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
