import { useState, useEffect } from 'react';
import TweetServices from '../services/TweetServices'

function GetTweets({tweetsToFeed}) {
    async function allTweets() {
        await TweetServices.getAll()
        .then((res) => {
            return res.data
        })
    }

    tweetsToFeed(allTweets())


    // tweetsToFeed(async () => {
    //     await TweetServices.getAll()
    //     .then((res) => {
    //         return res.data
    //     })
    // })
}

export default GetTweets

