import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import getFormattedWeatherData from '../../services/weatherService'
import SideBar from './SideBar';

//Component
import DashBoard from '../pages/DashBoard';
import AboutUs from '../pages/AboutUs';

export const AppContainer = () => {
return (
    <>
        <div className='flex flex-row h-screen'>
            <BrowserRouter>
                <div className='basis-1/4 flex bg-slate-500'>
                    <SideBar/>
                </div>
                <div className="basis-3/4 flex">
                        <Routes>
                            <Route
                                path='/'
                                element={ <DashBoard/>}
                            ></Route>
                            <Route
                                path='/aboutUs'
                                element={<AboutUs/>}
                            ></Route>
                        </Routes>
                </div>
            </BrowserRouter>  
        </div>
    </>
  )
}
