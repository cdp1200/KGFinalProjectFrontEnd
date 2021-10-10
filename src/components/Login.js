import React, { useState } from 'react'
import { Form } from "react-bootstrap";
import "./css/Feed.css";
import UserServices from '../services/UserServices'

function Login() {

  const initUserState = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState(initUserState);
    
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }


  // const loginUser = async (req, res) => {
  //   console.log(req)
  //   let data = {
  //     email: user.email,
  //     password: user.password
  //   }
  //   await UserServices.get(data)
  //   .then((res) => {
  //     console.log(res)
  //     setUser(initUserState)
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  // }

    return (
        <div>
          <div className="feed__header">
               <h2>Login</h2>
             </div>
            <Form.Floating className="mb-3" >
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <button className="submit" type="button" >Submit</button>
        </div>
    )
}

export default Login
