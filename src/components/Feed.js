import React, { useState } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import TweetServices from '../services/TweetServices'
import "./css/Feed.css";

function Feed( text ) {
    var theTweets = []

    async function getTweets () {
        const tweets = await TweetServices.getAll();
        return tweets.data.map(tweet => (
            <Post 
                displayName="Hardcoded4Now"
                userName="alsoHardcoded"
                verified={true}
                text={tweet.description}
                avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
                image={tweet.image}/>
        ))
    }

    theTweets = getTweets()
    console.log(theTweets)
    

    
    // const theTweets = getTweets();
    
    // console.log(theTweets)

    // const anything = theTweets.data
    
    // console.log(anything)

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
}

export default Feed;