import React, { useState } from "react";
import { Form } from "react-bootstrap";
import UserServices from '../services/UserServices'

function Register() {
  const initUserState = {
    avatar: "",
    username: "",
    email: "",
    password: "",
    retypedPass: "",
  }

  const [newUser, setNewUser] = useState(initUserState);
    
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUser({...newUser, [name]: value})
  }

  console.log(newUser)

  const createUser = () => {
    let data = {
      avatar: newUser.Avatar,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      retypedPass: newUser.retypedPass
    }
    if(data.password === data.retypedPass) {
      UserServices.create(data)
      .then(response => {
        setNewUser(
        { 
        username: response.data.username,
        email: response.data.email,
        password: response.data.password,
        }
      );
      setNewUser(initUserState)
      })
      .catch(e => {
        console.log(e);
      })
    }
  };
  
    return(
      <div>
        <Form.Floating className="mb-3" >
          <Form.Control
            id="floatingInputCustom"
            type="username"
            placeholder="Anything you want... for now"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingInputCustom">Username</label>
        </Form.Floating>
        <Form.Floating className="mb-3" >
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={newUser.email}
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
            value={newUser.password}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Retype Password"
            name="retypedPass"
            value={newUser.retypedPass}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingPasswordCustom">Retype Password</label>
        </Form.Floating>
        <Form.Floating className="mb-3" >
          <Form.Control
            id="floatingInputCustom"
            type="avatar"
            placeholder="Avatar image"
            name="avatar"
            value={newUser.avatar}
            onChange={handleInputChange}
          />
            <label htmlFor="floatingInputCustom">Avatar</label>
        </Form.Floating>
        <Form.Floating className="mb-3" ></Form.Floating>
        <button className="submit" type="button" onClick={createUser}>Submit</button>
      </div>
    )
}
export default Register