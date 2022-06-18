import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './SidebarLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Drawer from './Drawer';

function SidebarLink({ isOpen, route, routeName, icon, type }) {
    const name = routeName
    const linkActiveClass = isOpen ?"link active" : "link active close" 
    const linkClass = isOpen ? "link" : "link close" 
    const linkIconClass = "link-icon"
    const linkTextClass = isOpen ? "link-text" : "link-text close" 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerClass = isOpen ? 'drawer-container' : 'drawer-container close'
    
    function openDrawer() {
        if (type === 'Drawer') {
            setIsDrawerOpen(true);
        }
    }
    return(
        <div onMouseLeave={() => setIsDrawerOpen(false)}>
            <div className="link-container" onMouseOver={openDrawer} >
                <NavLink className={({ isActive }) => isActive ? linkActiveClass : linkClass} to={route}>
                    <FontAwesomeIcon className={linkIconClass} icon={icon}/> 
                    <span className={linkTextClass}>{name}</span>
                </NavLink>   
            </div>  
            {type === 'Drawer' && isDrawerOpen ? 
                <div className={drawerClass}>
                    <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen}/>  
                </div> : null } 
        </div>
        

    )      
}

export default SidebarLink;

