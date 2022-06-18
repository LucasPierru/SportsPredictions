import { faHomeAlt, faCircleInfo, faRunning, faUser, faCogs, faBasketball, faSoccerBall } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { 
        title: "Home", 
        route:"/", 
        icon: faHomeAlt
    },
    { 
        title: "Sports", 
        route:"/sports", 
        icon: faRunning, 
        subItem: [
            {
                title: "Basketball", 
                route:"/sports/basketball", 
                icon: faBasketball
            },
            { 
                title: "Football", 
                route:"/sports/football", 
                icon: faSoccerBall
            }
        ]
    },
    { 
        title: "Profile", 
        route:"/profile", 
        icon: faUser
    },
    { 
        title: "Settings", 
        route:"/settings", 
        icon: faCogs
    },
    { 
        title: "About", 
        route:"/about", 
        icon: faCircleInfo
    },
];

export default menuItems;