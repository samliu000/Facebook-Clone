import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from"@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from"@material-ui/icons/EmojiFlags";
import PeopleIcon from"@material-ui/icons/People";
import ChatIcon from"@material-ui/icons/Chat";
import StorefrontIcon from"@material-ui/icons/Storefront";
import VideoLibraryIcon from"@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from"@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://media-exp1.licdn.com/dms/image/C5603AQFwISC-cajaFw/profile-displayphoto-shrink_800_800/0/1592189648204?e=1637193600&v=beta&t=c8aQyuWopxDANfYPZWpua4hdpEQArWuwQvPVWN6_EuE"
                title="Samuel Liu"/>
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"/>
            <SidebarRow 
                Icon={EmojiFlagsIcon}
                title="Pages"/>
            <SidebarRow 
                Icon={PeopleIcon}
                title="Friends"/>
            <SidebarRow 
                Icon={ChatIcon}
                title="Messenger"/>
            <SidebarRow 
                Icon={StorefrontIcon}
                title="Marketplace"/>
            <SidebarRow 
                Icon={VideoLibraryIcon}
                title="Videos"/>
            <SidebarRow 
                Icon={ExpandMoreOutlined}
                title="Marketplace"/>
        </div>
    )
}

export default Sidebar