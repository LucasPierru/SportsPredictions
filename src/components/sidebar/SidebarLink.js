import React from 'react';
import { NavLink } from "react-router-dom";
import './SidebarLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarLink({ isClose, route, routeName, icon }) {
    const name = isClose ? null : routeName
    const linkActiveClass = isClose ? "link-active close" : "link-active"
    const linkClass = isClose ? "link close" : "link"
    const linkIconClass = isClose ? "link-icon close" : "link-icon" 
    const linkTextClass = isClose ? "link-text close" : "link-text" 

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

