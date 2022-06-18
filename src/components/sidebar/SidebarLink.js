import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './SidebarLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function SidebarLink({ isOpen, route, routeName, icon, subItem }) {
    const name = routeName
    const linkActiveClass = isOpen ?"link active" : "link active close" 
    const linkClass = isOpen ? "link" : "link close" 
    const linkIconClass = "link-icon"
    const linkTextClass = isOpen ? "link-text" : "link-text close" 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerClass = isOpen ? 'drawer-container' : 'drawer-container close'

    return(
        <div onMouseLeave={() => setIsDrawerOpen(false)} className='container'>
            {console.log(isDrawerOpen)}
            <div className="link-container" onMouseOver={() => setIsDrawerOpen(true)} >
                <NavLink className={({ isActive }) => isActive ? linkActiveClass : linkClass} to={route}>
                    <FontAwesomeIcon className={linkIconClass} icon={icon}/> 
                    <span className={linkTextClass}>{name}</span>
                </NavLink>   
            </div> 
  
            <div className={drawerClass}>
                <ul>
                    {isDrawerOpen && subItem && subItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <NavLink className={({ isActive }) => isActive ? linkActiveClass : linkClass} to={item.route}>
                                        <FontAwesomeIcon className={linkIconClass} icon={item.icon}/> 
                                        <span className={linkTextClass}>{item.title}</span>
                                    </NavLink>   
                                </div>    
                            </li>
                        )
                    })}     
                </ul>     
            </div>         
        </div>
        

    )      
}

export default SidebarLink;

