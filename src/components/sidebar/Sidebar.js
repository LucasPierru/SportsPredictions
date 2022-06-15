import React, { useState } from 'react'
import SidebarLink from './SidebarLink';
import './Sidebar.css'
import { faHomeAlt, faCircleInfo, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const menuItems = [
    { title: "Home", route:"/", icon: faHomeAlt },
    { title: "About", route:"/about", icon: faCircleInfo },
  ];

function Sidebar({ isClose, toggleSidebar}) {
    const [isOpen, setIsOpen] = useState(true);

    const sidebarClass = isOpen ? "sidebar" : "sidebar close";
    const toggleIcon = isOpen ? faAngleLeft : faAngleRight
    return (
        <div className={sidebarClass}>
            <ul>
                {menuItems.map((item) => {
                    return (
                        <div className={"sidebar-listItem"}>
                            <li key={item.title}>
                                <SidebarLink isOpen={isOpen} icon={item.icon} route={item.route} routeName={item.title}/>     
                            </li>  
                        </div>
                    )
                })}
            </ul>
                  
            <div className="collapse-container">
                <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className="icon" icon={toggleIcon}/>
                </button>
            </div>
        </div>
    )

}

export default Sidebar;