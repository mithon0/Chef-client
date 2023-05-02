import React from 'react';
import Navigation from '../Navigation/Navigation';
import Home from '../Component/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;