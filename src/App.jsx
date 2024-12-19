// App.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Manynews from "./components/Manynews/Manynews.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/news/News.jsx";
import Signup from "./components/Signup"; // Import the new Signup component
import { auth } from "./firebase.config"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const MainApp = () => {
  useEffect(() => {
    document.title = "Daily-Hunt";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/:news" element={<Manynews />} />
            <Route path="/signup" element={<Signup />} /> {/* Route for signup */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <MainApp />
    </>
  );
};

export default App;
