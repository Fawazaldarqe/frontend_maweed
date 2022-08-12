import React, { useState ,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav1} from'../Patiant/Nav1'
import { signup ,login } from "../../firebase";
import { Link } from "react-router-dom";


export function LoginDoctor(){
    const [loading,setLoading]=useState(false)
    const emailRef =useRef();
    const passwordRef =useRef();

   async function handleSignup(){
    setLoading(true)
       try{
        await signup(emailRef.current.value,passwordRef.current.value)
       }catch{
           alert('this is account already saved ')
       }
       setLoading(false)
    }

    async function handleLogin(){
        setLoading(true)
           try{
            await login(emailRef.current.value,passwordRef.current.value)
           }catch{
               alert('error email or password ')
           }
           setLoading(false)
        }
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };


    return(
        <>
        <Nav1/>
       <div className="App">
      <div className="container">
          <h1 id='title_login'>Login</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                ref={emailRef}
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                ref={passwordRef}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                {/* <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label> */}
              </div>
              
              <button onClick={handleLogin}  id='btn_login' type="submit" className="btn btn-primary">
                Login
              </button>
             
              <button disabled={loading} onClick={handleSignup} id='singup' type="submit" className="btn btn-primary">
                singup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
