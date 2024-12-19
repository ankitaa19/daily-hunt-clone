// components/UserProfile.jsx
import React from 'react';
import { auth } from '../firebase.config';

const UserProfile = () => {
  const user = auth.currentUser;

  if (!user) return <h2>Please log in to view your profile.</h2>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>
    </div>
  );
};

export default UserProfile;
