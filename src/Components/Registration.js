import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";


function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
  
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
  
  
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (!name || !email || !password || !phone || !profession) {
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem(
          "Password",
          JSON.stringify(password)
        );
        console.log("Saved in Local Storage");
  
        setLogin(!login);
      }
    }
  
    function handleClick() {
      setLogin(!login);
    }
  
   
    
  
    return (
      <>
          <div>
            {" "}
            {login ? (
              <form onSubmit={handleFormSubmit}>
              <div className="title">
                <h1>Register</h1>
              </div>    
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <input
                    type="Phone"
                    className="form-control"
                    placeholder="Enter Contact Number"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <Form.Control
                    as="select"
                    onChange={(event) => setProfession(event.target.value)}
                  >
                    <option>Choose Profession</option>
                    <option>Software Developer</option>
                    <option>Front End Developer</option>
                    <option>Back End Developerr</option>
                    <option>Full Stack Developer</option>
                  </Form.Control>
                </div>
  
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Register
                </button>
                <p onClick={handleClick} className="forgot-password text-right">
                  Already registered{" "}log in?                 <button  type="submit" className="btn btn-dark btn-lg btn-block">
                  Login
                </button>
                  
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    I got it you are in hurry! But every Field is important!
                  </Alert>
                )}
              </form>
            ) : (
              <Login />
            )}
          </div>
      
      </>
    );
  }
  
  export default Registration;
