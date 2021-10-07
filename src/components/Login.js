import React from 'react'
import { Form } from "react-bootstrap";

function Login() {
    return (
        <div>
            <Form.Floating className="mb-3" >
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
            name="email"
            
          />
            <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
            name="password"
          />
            <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        </div>
    )
}

export default Login
