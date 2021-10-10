import React, { useState } from "react"
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from './components/Widgets'

function App() {
  const initLoginState = {
    bool: true,
}

const [isLoggedIn, setIsLoggedIn] = useState(initLoginState)

const loginPropManager = (data) => {
    setIsLoggedIn(data)
}

return (
  <div className="app">
    <Sidebar loginPropManager={loginPropManager} loggedIn={isLoggedIn} /> 
    <Feed loggedIn={isLoggedIn}/>
    <Widgets /> 
  </div>
);

}

export default App;





// return (
//   <div className="app">
//     <Sidebar loggedIn={isLoggedIn} /> 
//     <Feed loginPropManager={loginPropManager}/>
//     <Widgets /> 
//   </div>
// );








  // const initView = {
  //   page: "Home"
  // }

  // const [pageView, setPageView] = useState(initView);

  // const thisPage = (data) => {
  //     setPageView(data)
  // }

  // return (
  //   <div className="app">
  //     <Sidebar thisPage={thisPage}/> 
  //     <Feed view={pageView} thisPage={thisPage}/>
  //     <Widgets /> 
  //   </div>
  // );