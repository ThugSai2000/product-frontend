import React from 'react'
import './style.css'
const Header = () =>
{
    return (
        <div class='main-header' style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            {/* logo */}
            <div className='logo'>
                <img src="https://internship.gwingsoftwaretechnologies.com/images/logo.png" width={'80px'} alt="" />
            </div>

            {/* search bar */}
            <div className='header-right'>
                <div>
                    <input placeholder='Search' />
                </div>

                <h6>News</h6>

                <h6>About</h6>

                <div>
                    <button name='Logout' />
                </div>

            </div>
        </div>
    )
}

export default Header
