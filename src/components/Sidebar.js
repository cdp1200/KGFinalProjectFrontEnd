import React from 'react';
import "./css/Sidebar.css";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import SidebarOption from './SidebarOption';
// import Feed from './Feed'
// import Link from '@mui/material/Link';
// import Register from './Register'
// import { Button } from '@mui/material'
// import { Link, Switch, Route } from 'react-router-dom'

export default function Sidebar ({thisPage}) {

    return (
        
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>

            <button className="sidebar__button" type="button" page="Home" name="Home" value="Home" onClick={() => thisPage('Home')}><SidebarOption active Icon={HomeIcon} text="Home" /></button>
            <button type="button" page="Register" name="Register" value="Register" onClick={() => thisPage('Register')}><SidebarOption active Icon={AppRegistrationIcon}  text="Register" /></button>
            <button type="button" page="Login" name="Login" value="Login" onClick={() => thisPage('Login')}><SidebarOption active Icon={LoginIcon} text="Login" /></button>

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption active Icon={AppRegistrationIcon}  text="Register" />
            <SidebarOption active Icon={LoginIcon} text="Login" />
            

            {/* <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button> */}
        </div>
    )
}