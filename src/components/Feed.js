import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import Register from './Register'
import TweetServices from '../services/TweetServices'
import "./css/Feed.css";
import GetTweets from './GetTweets';
import Login from './Login';

function Feed( pageView ) {
    var theView = pageView.view;
        
    const [tweets, setTweets] = useState(null);

        useEffect(() => {
            const theTweets = async () => {
                await TweetServices.getAll()
                .then((blogs) => {
                    console.log('get tweets', blogs)
                    setTweets(blogs.data)
                })
                .catch((err) => {
                    console.log("get tweets err", err)
                })
            }
            theTweets();
        }, []);
    
        console.log(tweets)


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
            <Login />
        </div>
        )
    } else {
    return (
        
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {tweets.map(tweet => (
                <Post 
                displayName="Hardcoded4Now"
                userName="alsoHardcoded"
                verified={true}
                text={tweet.description}
                avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
                image=''/>
            ))} 
            
            


        </div>
    )
}}

export default Feed;