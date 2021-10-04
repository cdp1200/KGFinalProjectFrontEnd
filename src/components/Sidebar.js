import React, { useState } from 'react';
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

export default function Sidebar ({pageView}) {
    const initView = {
        page: "",
      }
    
      const [pageClicked, setPageClicked] = useState(initView);
    
      const data = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setPageClicked({...pageClicked, page: value})
      }

      console.log(pageClicked)

    return (
        
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>

            <button type="button" page="Home" name="Home" value={pageClicked.page} onClick={data}><SidebarOption active Icon={HomeIcon} text="Home" /></button>
            <SidebarOption Icon={AppRegistrationIcon} text="Register" />
            <SidebarOption Icon={LoginIcon} text="Login" />

            {/* <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button> */}
        </div>
    )
}