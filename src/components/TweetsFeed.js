import React, { useEffect, useState } from 'react'
import TweetBox from "./TweetBox";
import TweetServices from '../services/TweetServices'
import Post from './Post';
import { Link } from 'react-router-dom'

function TweetsFeed({isLoggedIn}) {
    const [tweets, setTweets] = useState(null);

        useEffect(() => {
            const theTweets = async () => {
                await TweetServices.getAll()
                .then((tweets) => {
                    setTweets(tweets.data)
                })
                .catch((err) => {
                    console.log("get tweets err", err)
                })
            }
            theTweets();
        }, []);

    
        // console.log("tweetsFeed login info", isLoggedIn)
        if(!isLoggedIn) {
    return (
            <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

             <TweetBox />


             {tweets ? (
                 <div >
             {tweets.map(tweet => (
                 <div id={tweet.id}>
                <Post 
                displayName="Hardcoded4Now"
                userName="alsoHardcoded"
                verified={true}
                text={tweet.description}
                avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
                image='https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4='/>
                </div>
                
            ))} </div>
        ) : (
            <div>
            </div>
        )}
        </div>
        )
    } else {
        return (
            <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

             {tweets ? (
                 <div>
             {tweets.map(tweet => (
                <li className="nav-item">
                <Link to={`/tweets/${tweet.id}`} className="nav-link">
                <div id={tweet.id}>
               <Post 
               displayName="Hardcoded4Now"
               userName="alsoHardcoded"
               verified={true}
               text={tweet.description}
               avatar="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
               image='https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4='/>
               </div>
               </Link>
            </li>
            ))} </div>
        ) : (
            <div>
            </div>
        )}
        </div>
        )
    }
}

export default TweetsFeed
