import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../../starter-code/assets/shared/logo.svg';
import menu from '../../starter-code/assets/shared/icon-hamburger.svg';
import closeBtn from '../../starter-code/assets/shared/icon-close.svg';
'../'


const NavBar = () => {

    const [showSideBar, setshowSideBar] = useState(false);

    const openSideBar =()=>{
        setshowSideBar(true);
    }

    const closeideBar =()=>{
        setshowSideBar(false);
    }
    return ( 
    
        <>
             <nav className='navigation'>
                <img src={logo} alt="logo" />
                
                <img src={menu} alt="hamburger menu" className='menu-icon' onClick={openSideBar} />
                
                <hr className='rule'/>
                <div className={showSideBar? 'nav-closed': 'nav-expanded'}>
                    <img src={closeBtn} alt="close button" onClick={closeideBar} style={showSideBar? {display:'block'}: {display:'none'}} className='close-btn'/>
                    <ol className='nav-items' start={0}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/crew">Crew</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        
                    </ol>
                    
                </div>
            
            </nav>
            <Outlet/>
        </>
       
        
     );
}
 
export default NavBar;