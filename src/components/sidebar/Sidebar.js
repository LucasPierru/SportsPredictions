import React, { useState } from 'react'
import SidebarLink from './SidebarLink';
import './Sidebar.css'
import { faHomeAlt, faCircleInfo, faAngleRight, faAngleLeft, faRunning, faUser, faCogs} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const menuItems = [
    { title: "Home", route:"/", icon: faHomeAlt, type: 'Link' },
    { title: "Sports", route:"/sports", icon: faRunning, type: 'Drawer' },
    { title: "Profile", route:"/profile", icon: faUser, type: 'Link' },
    { title: "Settings", route:"/settings", icon: faCogs, type: 'Link' },
    { title: "About", route:"/about", icon: faCircleInfo, type: 'Link' },
];

function Sidebar() {
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
                                    <SidebarLink isOpen={isOpen} icon={item.icon} route={item.route} routeName={item.title} type={item.type}/>     
                                </li>  
                            </div>
                        )  
                    }   
                )}
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