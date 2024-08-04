import React, {useContext, useState } from "react";
import { LOGIN_API, SIGNUP_API } from "../constant/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppContext from "../component/AppContext";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const [state,setState] = useContext(AppContext);

  const setCurrentUser = (item) => {
    setState(prevState => ({
      ...prevState,
      isUserLogin: true,
      userProfile: item,
    }));
  }


  const validateLogin = () => {
    if(emailAddress.length == 0) {
      alert("Enter your Email-Address.");
    } else if (password.length == 0) {
      alert("Enter your password.");
    } else {
      axios
        .post(
          LOGIN_API,
          {
            userEmail: emailAddress,
            userPassword: password,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(function (response) {
          const { code, message, user } = response.data;
          alert(message);
          if (code == 200) {
            setCurrentUser(user[0]);
            setEmailAddress("");
            setPassword("");
            navigation("/home");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };







  return (
    <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Login !!</h2>
      <div
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          marginTop: "20px",
          marginBottom: "20px",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="form-group"
        >
          <label style={{ marginTop: "10px", fontWeight: "bold" }}>
            Username
          </label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            className="form-control"
            id="inputFullName"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Enter username"
          />
        </div>
      </div>

      <div
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          marginTop: "20px",
          marginBottom: "20px",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="form-group"
        >
          <label style={{ marginTop: "10px", fontWeight: "bold" }}>
            Enter Password
          </label>
          <input
            style={{ marginTop: "10px" }}
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={()=> validateLogin()}
          style={{ width: "100%", marginTop: "20px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <button
          onClick={()=> navigation('/signup')}
          style={{ width: "100%", marginTop: "20px" }}
          type="submit"
          className="btn btn-primary"
        >
          Create an account ?
        </button>
      </div>
    </div>
  );
};

export default Login;
