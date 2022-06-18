import React from "react";
import SidebarLink from "./SidebarLink";
import { faBasketball, faSoccerBall } from "@fortawesome/free-solid-svg-icons";

const drawerItems = [
    { title: "Basketball", route:"/sports/basketball", icon: faBasketball, type: 'Link' },
    { title: "Football", route:"/sports/football", icon: faSoccerBall, type: 'Link' },
];
function Drawer({isDrawerOpen, setDrawerOpen}) {
    return (
        <div onMouseOver={() => setDrawerOpen(true)}>
            <ul>
                {drawerItems.map((item) => {
                    return (
                        <div>
                            <li key={item.title}>
                                <SidebarLink 
                                    isOpen={isDrawerOpen} 
                                    icon={item.icon} 
                                    route={item.route} 
                                    routeName={item.title} 
                                    type={item.type}
                                />     
                            </li>  
                        </div>
                    )  
                })}
            </ul>
        </div>
    );
}

export default Drawer;