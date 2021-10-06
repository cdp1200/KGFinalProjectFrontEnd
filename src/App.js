import React, { useState } from "react"
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from './components/Widgets'
import TweetServices from './services/TweetServices'

function App() {
  async function allTweets() {
    await TweetServices.getAll()
    .then((res) => {
        return res.data
    })
}

console.log(allTweets())

  const initView = {
    page: "Home"
  }

  const [pageView, setPageView] = useState(initView);

  const thisPage = (data) => {
      setPageView(data)
  }

  return (
    <div className="app">
      <Sidebar thisPage={thisPage}/> 
      <Feed view={pageView} thisPage={thisPage}/>
      <Widgets /> 
    </div>
  );
}

export default App;
