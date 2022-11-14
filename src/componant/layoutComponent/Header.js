import React from 'react';
import vivsoftLogo from './../../VivSoft Logo Final.png';
import vivsoftHeader from './../../VivSoft Header.png';

export default function Header() {
  return (
      <div className='flex flex-row bg-slate-300'>
        <div className='basis-1/4 flex items-center justify-center'>
          <img src={vivsoftLogo} className='app-logo' alt='logo' height='100' width='100'/>
        </div>
        <div className='basis-3/4 flex items-center justify-center text-7xl  text-center text-black'>
          <img src={vivsoftHeader} className='app-logo' alt='logo' height='200' width='400'/>
        </div>
      </div>
  )
}