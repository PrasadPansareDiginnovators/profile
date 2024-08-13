import React from 'react';
import profile from '../images/pro.png';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 shadow-xl">
      <h1 className="text-lg font-semibold text-left">Profile</h1>
      <div className="mt-6 bg-white  rounded-lg drop-shadow-md p-6">
        <h2 className="text-md font-semibold text-left">Edit Your Profile</h2>
        <div className="mt-6 flex flex-col md:flex-row ">
          <div className="flex-shrink-0 ">
            <img src={profile} alt="Pro" className="mt-1 " />
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-medium text-left">First Name</label>
              <input type="text" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Last Name</label>
              <input type="text" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Email</label>
              <input type="email" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Address</label>
              <input type="text" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Country</label>
              <select className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2">
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-left">City</label>
              <select className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2">
                <option>Select City</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Phone Number</label>
              <input type="text" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-left">Organization Name</label>
              <input type="text" className="mt-1 block w-full border bg-[#F7F7F8] border-[#EAEAEA] rounded  py-2" />
            </div>
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="px-6 py-2 bg-[#882EFD] text-white rounded ">Save</button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <p className='text-xs font-semibold'>Copyright ©2024 Diginnovators</p>
        <div className='flex space-x-5 text-[#882EFD] text-xs font-semibold'>
          <p>Privacy Policy</p>
          <p>Terms of Conditions</p>
        </div>
        </div>
    </div>
  );
};

export default MainContent;
