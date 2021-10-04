import React from "react";
import { Form } from "react-bootstrap"

function Register() {
    return(
        <div className="feed">
          <div className="feed__header">
                <h2>Register</h2>
            </div>
  <Form.Floating className="mb-3" >
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="Retype password"
      placeholder="Retype Password"
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>
</div>
    )
}
export default Register