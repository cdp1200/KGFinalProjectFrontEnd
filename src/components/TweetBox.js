import React, { useState } from 'react';
import './css/TweetBox.css';
import { Avatar } from '@mui/material'
import TweetServices from '../services/TweetServices'

function TweetBox() {
    const initialTweetState = {
        id: null, 
        image: "",
        description: "",
        published: false
      }
    
      const [newTweet, setNewTweet] = useState(initialTweetState);
    
      const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setNewTweet({...newTweet, [name]: value})
      }
      
      
      const saveTweet = () => {
        let data = {
          image: newTweet.image,
          description: newTweet.description,
          published: newTweet.published
        }
        TweetServices.create(data)
        .then(response => {
          setNewTweet({id: response.data.id,
          image: response.data.image,
          description: response.data.description,
          published: response.data.published
        });
        setNewTweet(initialTweetState)
      })
      .catch(e => {
        console.log(e);
      })
      };
    
      
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                    <input placeholder="What's happening?" type="text" id="description" required value={newTweet.description} onChange={handleInputChange} name="description"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" value={newTweet.image} onChange={handleInputChange} name="image"/>
                <button type="button" className="tweetBox__tweetButton" onClick={saveTweet}>Tweet</button>
            </form>
        </div>
    )
}

export default TweetBox