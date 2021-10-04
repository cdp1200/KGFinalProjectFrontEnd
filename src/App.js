import React, { useState } from "react"
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from './components/Widgets'

function App() {
  const initView = {
    page: "Home"
  }

  const [pageView, setPageView] = useState(initView);

  const thisPage = (event) => {
      setPageView(event)
  }



  return (
    <div className="app">
      <Sidebar thisPage={thisPage}/>
      <Feed view={pageView.page}/>
      <Widgets />
    </div>
  );
}

export default App;
