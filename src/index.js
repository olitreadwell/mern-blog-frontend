import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVv_SLbAl8Vx2UXZFVwsdPEZYXRyVr5vs",
    authDomain: "linkedin-blog-a59c2.firebaseapp.com",
    projectId: "linkedin-blog-a59c2",
    storageBucket: "linkedin-blog-a59c2.appspot.com",
    messagingSenderId: "813195691770",
    appId: "1:813195691770:web:6908c027feface0b05ab43",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
