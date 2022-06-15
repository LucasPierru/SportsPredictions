import React from 'react';
import { NavLink } from "react-router-dom";
import './SidebarLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarLink({ isOpen, route, routeName, icon }) {
    const name = routeName
    const linkActiveClass = isOpen ?"link active" : "link active close" 
    const linkClass = isOpen ? "link" : "link close" 
    const linkIconClass = "link-icon"
    const linkTextClass = isOpen ? "link-text" : "link-text close" 

    return(
        <div className="link-container">
            <NavLink className={({ isActive }) => isActive ? linkActiveClass : linkClass} to={route}>
                <FontAwesomeIcon className={linkIconClass} icon={icon}/> 
                <span className={linkTextClass}>{name}</span>
            </NavLink>
        </div>
    )      
}

export default SidebarLink;

