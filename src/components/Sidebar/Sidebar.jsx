import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">Categories</div>
      <div className="sidebar-item item-1" onClick={() => handleNavigation('/for-you')}>For You</div>
      <div className="sidebar-item item-2" onClick={() => handleNavigation('/sports')}>Sports</div>
      <div className="sidebar-item item-3" onClick={() => handleNavigation('/business')}>Business</div>
      <div className="sidebar-item item-4" onClick={() => handleNavigation('/technology')}>Technology</div>
      <div className="sidebar-item item-5" onClick={() => handleNavigation('/entertainment')}>Entertainment</div>
      <div className="sidebar-item item-6" onClick={() => handleNavigation('/education')}>Education</div>
      <div className="sidebar-item item-7" onClick={() => handleNavigation('/crimes')}>Crimes</div>
      <div className="sidebar-item item-8" onClick={() => handleNavigation('/travel')}>Travel</div>
    </div>
  );
};

export default Sidebar;
