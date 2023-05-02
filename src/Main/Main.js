import React from 'react';
import Navigation from '../Navigation/Navigation';
import Home from '../Component/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Navigation/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;