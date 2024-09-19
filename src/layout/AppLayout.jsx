import React, { useState } from 'react'
import './layout.css'


import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
// import Header from '../Components/Header'

const AppLayout = () =>
{

    return (
        <div>
            {/* Header */}
            <div className="header">
                <div class='main-header' style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    {/* logo */}
                    <div className='logo'>
                        <img src="https://internship.gwingsoftwaretechnologies.com/images/logo.png" width={'80px'} alt="" />
                    </div>

                    {/* search bar */}
                    <div className='header-right'>
                        <div>
                            <input id='input-component' type="text" placeholder='Search' />
                        </div>

                        <h6>News</h6>

                        <h6>About</h6>

                        <div>
                            <button id='button-component' name='Logout' />
                        </div>

                    </div>
                </div>
            </div>

            {/* SideBar */}
            <div className="sideBar"><Sidebar /></div>

            {/* Content */}
            <div className='content'>
                <Outlet />
                {/* <Dashboard /> */}
                {/* <DashboardContainer /> */}
                {/* <UserContainer /> */}
            </div>



        </div>
    )
}

export default AppLayout
