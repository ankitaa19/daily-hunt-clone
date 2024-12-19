import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const value = useRef();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isUploadOpen, setUploadOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const getInput = () => {
    const inputValue = value.current.value;
    if (inputValue) {
      navigate(`/@${inputValue}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getInput();
    }
  };

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://localhost:5005/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Image uploaded successfully!");
        setUploadOpen(false); // Close the modal after successful upload
      } else {
        alert(data.message || "Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <nav>
      {/* Logo Section */}
      <Link to="/">
        <img
          src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=2.0.39"
          alt="DailyHunt Logo"
        />
      </Link>

      {/* Navigation and Search Section */}
      <div className="nav-menu">
        <button>News</button>
        <div>
          <input
            type="text"
            placeholder="Search"
            ref={value}
            onKeyDown={handleKeyDown}
          />
          <button onClick={getInput}>Search</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-actions">
        <Link to="/save">
          <button>Saved</button>
        </Link>
        <img
          src="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39"
          alt="Notifications"
        />
        <img
          src="https://m.dailyhunt.in/assets/img/desktop/header_lang_icn.svg?mode=pwa&ver=2.0.39"
          alt="Language"
        />
        <button onClick={() => setLoginOpen(true)}>Login</button>
        <button onClick={() => setRegisterOpen(true)}>Register</button>
        <button onClick={() => setUploadOpen(true)} style={{ fontSize: "20px" }}>
          +
        </button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal" onClick={() => setLoginOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Login</h3>
            <input placeholder="Email" />
            <input placeholder="Phone Number" />
            <button>Send OTP</button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="modal" onClick={() => setRegisterOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Register</h3>
            <input placeholder="Username" />
            <input placeholder="Age" type="date" />
            <input placeholder="Gender" />
            <input placeholder="Email" />
            <input placeholder="Phone Number" />
            <button>Register</button>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {isUploadOpen && (
        <div className="modal" onClick={() => setUploadOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Upload Image</h3>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
