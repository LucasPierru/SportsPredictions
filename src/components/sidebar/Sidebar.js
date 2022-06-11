import React from 'react'
import SidebarLink from './SidebarLink';
import './Sidebar.css'
import { faHomeAlt, faCircleInfo, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar({ isClose, toggleSidebar}) {
    const sidebarClass = isClose ? "sidebar close" : "sidebar";
    const toggleIcon = isClose ? faAngleRight : faAngleLeft
    return (
        <div className={sidebarClass}>
            <div>
                <SidebarLink isClose={isClose} icon={faHomeAlt} route="/" routeName="Home"/>
                <SidebarLink isClose={isClose} icon={faCircleInfo} route="/about" routeName="About"/>    
            </div>
            <div className="collapse-container">
                <button className="collapse-button" onClick={toggleSidebar}>
                    <FontAwesomeIcon className="icon" icon={toggleIcon}/>
                </button>
            </div>
        </div>
    )

}

export default Sidebar;