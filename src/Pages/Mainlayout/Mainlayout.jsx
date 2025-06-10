import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 mx-auto'>

                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;