import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Manynews from "./components/Manynews/Manynews.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/news/News.jsx"; 

function App() {
  useEffect(() => {
    // Set the document title
    document.title = "DailyHunt";
    
    // Set the favicon
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
      faviconLink.href = "https://images.sftcdn.net/images/t_app-icon-m/p/ed7c8226-a4ec-11e6-927f-00163ed833e7/2071148802/newshunt-logo";
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <main style={{ flex: 1 }}> {/* Ensure main content takes the remaining space */}
          <Routes>
            <Route path="/" element={<News />} /> {/* Default route */}
            <Route path="/news" element={<News />} /> {/* Static News route */}
            <Route path="/:news" element={<Manynews />} /> {/* Dynamic route for categories */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
