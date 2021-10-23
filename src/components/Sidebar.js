import React from 'react';
import "./css/Sidebar.css";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import SidebarOption from './SidebarOption';
// import Feed from './Feed'
// import Link from '@mui/material/Link';
// import Register from './Register'
// import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Sidebar ({loginPropManager, loggedIn}) {
    if(!loggedIn) {
        return (
            <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <ul className="sidebar__list">
            <li className="nav-item">
            <Link to={"/tweets"} className="nav-link">
                <SidebarOption active Icon={HomeIcon} text="Home" />
            </Link>
        </li>
        <li className="nav-item">
            <Link to={"/register"} className="nav-link">
                <SidebarOption active Icon={AppRegistrationIcon}  text="Register" />
            </Link>
        </li>
        <li className="nav-item">
            <Link to={"/login"} className="nav-link" onClick={()=> loginPropManager(true)}>
                <SidebarOption active Icon={LoginIcon} text="Login" />
            </Link>
        </li>
        </ul>
        </div>
        )
        
    } else {
    return (
        
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <ul className="sidebar__list">
        <li className="nav-item">
            <Link to={"/tweets"} className="nav-link">
                <SidebarOption active Icon={HomeIcon} text="Home" />
            </Link>
        </li>
        <li className="nav-item">
            <Link to={"/about"} className="nav-link">
                <SidebarOption active Icon={InfoIcon}  text="About" />
            </Link>
        </li>
        <li className="nav-item">
            <Link to={"/logout"} className="nav-link" onClick={()=> loginPropManager(false)}>
                <SidebarOption active Icon={LockIcon} text="Logout" />
            </Link>
        </li>
        </ul>
            {/* <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button> */}
        </div>
    )
        }
}


// eslint-disable-next-line
{/* <button className="sidebar__button" type="button" page="Home" name="Home" value="Home" onClick={() => thisPage('Home')}><SidebarOption active Icon={HomeIcon} text="Home" /></button>

            
            <button className="sidebar__button" type="button" page="Register" name="Register" value="Register" onClick={() => thisPage('Register')}><SidebarOption active Icon={AppRegistrationIcon}  text="Register" /></button>
            <button className="sidebar__button" type="button" page="Login" name="Login" value="Login" onClick={() => thisPage('Login')}><SidebarOption active Icon={LoginIcon} text="Login" /></button> */}