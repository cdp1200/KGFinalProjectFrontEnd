import React from 'react';
import "./Sidebar.css";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material'


function Sidebar () {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={AppRegistrationIcon} text="Register"/>
            <SidebarOption Icon={LoginIcon} text="Login"/>

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;