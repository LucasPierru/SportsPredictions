import React, { useState } from 'react'
import SidebarLink from './SidebarLink';
import './Sidebar.css'
import { faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuItems from './MenuItems';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarClass = isOpen ? "sidebar" : "sidebar close";
    const toggleIcon = isOpen ? faAngleLeft : faAngleRight
    return (
        <div className={sidebarClass}>
            <ul>
                {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={"sidebar-listItem"}>
                                    <SidebarLink isOpen={isOpen} icon={item.icon} route={item.route} routeName={item.title} subItem={item.subItem}/>     
                                </div> 
                            </li>  
                            
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