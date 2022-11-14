import React from 'react';
import {Link} from 'react-router-dom';

export default function SideBar() {
  const sideBarMenuList = [
    {
        id:'1',
        title: 'DashBoard',
        path: '/'
    },
    {
        id:'2',
        title: 'About Vivsoft',
        path: '/aboutUs'
    }
  ]  
  return (
    <div className='flex flex-col mx-auto'>
        {sideBarMenuList.map((sideBarMenu)=> (
            <Link 
            key={sideBarMenu.id} 
            to={sideBarMenu.path}
            >
              <button key={sideBarMenu.id} className='mx-auto my-4 items-center justify-center text-white text-lg font-medium'>{sideBarMenu.title}</button>   
            </Link>
            
        ))}
    </div>
  )
}
