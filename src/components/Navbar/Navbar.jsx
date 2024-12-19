import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase.config"; // Adjust the path as necessary
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const value = useRef();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginOpen(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Failed to log in: " + error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setRegisterOpen(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Failed to register: " + error.message);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav>
      <Link to="/">
        <img
          src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=2.0.39"
          alt="DailyHunt Logo"
        />
      </Link>

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

        {/* Show user profile button if logged in */}
        {user ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/user-profile">
              <button>{user.email}</button>
            </Link>
          </div>
        ) : (
          <div>
            <button onClick={() => setLoginOpen(true)}>Login</button>
            <button onClick={() => setRegisterOpen(true)}>Register</button>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal" onClick={() => setLoginOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Login</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="modal" onClick={() => setRegisterOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Register</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
