import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Profile = () => {
  return (
    <div className="flex-1 flex flex-col sm:justify-center ">
        <Navbar />
    <div className="min-h-screen flex">
      <Sidebar />
        <MainContent />        
      </div>
    </div>
  );
};

export default Profile;
