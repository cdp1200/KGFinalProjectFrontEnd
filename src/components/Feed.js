import React, { useState, useCallback } from 'react';
import TweetsFeed from './TweetsFeed'
import Register from './Register'
import "./css/Feed.css";
import Login from './Login';
import Logout from './Logout';
import About from './About';
import { Switch, Route } from 'react-router-dom'

function Feed( {loggedIn} ) {
    const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
    console.log("initial feed login value", isLoggedIn);


  const loginInfo = useCallback(() => {
    setIsLoggedIn(loggedIn);
    }
  , [loggedIn]);

  console.log(loginInfo)
  
    // const initLoginState = {
    //     bool: true,
    // }

    // const [isLoggedIn, setIsLoggedIn] = useState(initLoginState)

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, "", value)
        
      }


    console.log("feed data being passed in", loggedIn)
    console.log("Feed login info", isLoggedIn)
    // console.log("feed loginpropmanager", loginPropManager)

        if(loggedIn) {
            return (
                <div>
                    <Switch>
                        <Route exact path={["/", "/tweets"]} component={TweetsFeed} isLoggedIn={isLoggedIn} value={loggedIn} onChange={handleInputChange} name="bool"/>
                        <Route exact path="/about" component={About} />
                        <Route exact path="/logout" component={Logout} />
                    </Switch>
                </div>
            )
        } else {
            return (
                
                <div>
                    
                    <Switch>
                        <Route exact path={["/", "/tweets"]} component={TweetsFeed} isLoggedIn={isLoggedIn} value={loggedIn} onChange={handleInputChange} name="bool"/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </div>
            )
        }
}

export default Feed;




// var theView = pageView.view;
    // console.log(theView)

// if (theView === "Register") {
    //     return (
    //     <div className="feed">
    //         <div className="feed__header">
    //             <h2>Register</h2>
    //         </div>
    //             <Register  />
    //         </div>
    //     )
    // } else if (theView === "Login" ) {
    //     return(
    //         <div className="feed">
    //         <div className="feed__header">
    //             <h2>Login</h2>
    //         </div>
    //         <Login />
    //     </div>
    //     )
    // } else if (tweets != null) {
    // return (
        
    //     <div className="feed">
    //         <div className="feed__header">
    //             <h2>Home</h2>
    //         </div>

    //         <TweetBox />

    //         {tweets.map(tweet => (
    //             <Post 
    //             displayName="Hardcoded4Now"
    //             userName="alsoHardcoded"
    //             verified={true}
    //             text={tweet.description}
    //             avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
    //             image=''/>
    //         ))} 
            
            


    //     </div>
    //     )
    // } else {
    //     return (
    //         <div className="feed">
    //         <div className="feed__header">
    //             <h2>Login</h2>
    //         </div>
    //         <Login />
    //     </div>
    //     )
    // }