import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import Register from './Register'
import TweetServices from '../services/TweetServices'
import "./css/Feed.css";
import GetTweets from './GetTweets';

function Feed( pageView ) {
    var theView = pageView.view;
    
    // const initTweets = {
    //     myArray: []
    // }

    // const [tweets, setTweets] = useState(initTweets);

    // const tweetsToFeed = (data) => {
    //     setTweets(data)
    // }
    
    // <GetTweets tweetsToFeed={tweetsToFeed} />

    // console.log(tweets)

    
    // const theTweets = getTweets();
    
    // console.log(theTweets)

    // const anything = theTweets.data
    
    // console.log(anything)
    if (theView === "Register") {
        return (
        <div className="feed">
            <div className="feed__header">
                <h2>Register</h2>
            </div>
                <Register />
            </div>
        )
    } else if (theView === "Login" ) {
        return(
            <div className="feed">
            <div className="feed__header">
                <h2>Login</h2>
            </div>

        </div>
        )
    } else {
    return (
        
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {/* {theTweets.map(tweet => ( */}
                <Post 
                displayName="Hardcoded4Now"
                userName="alsoHardcoded"
                verified={true}
                text=''
                avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
                image=''/>
            {/* ))} */}
            
            


        </div>
    )
}}

export default Feed;