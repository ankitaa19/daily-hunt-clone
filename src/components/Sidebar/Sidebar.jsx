import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="sidebar-container">
            <div className="sidebar-heading">Categories</div>
            <div 
                className={`sidebar-item ${location.pathname === '/sports' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/sports')}
            >
                Sports
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/business' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/business')}
            >
                Business
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/technology' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/technology')}
            >
                Technology
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/entertainment' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/entertainment')}
            >
                Entertainment
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/education' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/education')}
            >
                Education
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/crimes' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/crimes')}
            >
                Crimes
            </div>
            <div 
                className={`sidebar-item ${location.pathname === '/travel' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/travel')}
            >
                Travel
            </div>
        </div>
    );
};

export default Sidebar;
