import React from 'react';
import dashboard from '../images/sidebar/dashboard.svg'
import site from '../images/sidebar/sites.svg'
import team from '../images/sidebar/team.svg'
import setting from '../images/sidebar/setting.svg'


const Sidebar = () => {
  return (
    <div className="w-64 bg-[#F7F7F8] border-r hidden md:block">
        <div className='my-3 items-center text-center'>
            <div className='flex ml-5'>
                <img src={dashboard} alt='dashboard ' className='pt-3'/>
            </div>
            <div className='flex ml-5'>
                <img src={site} alt='site '/>
                <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Sites</p>   
            </div>
            <div className='flex ml-5'>
                <img src={team} alt='team '/>
                <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Team</p>   
            </div>
            <div className='flex ml-5'>
                <img src={setting} alt='setting '/>
                <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Settings</p>   
            </div>

        </div>
      
    </div>
  );
};

export default Sidebar;
