import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { SIGNUP_API } from "../constant/api";
import AppContext from "../component/AppContext";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [state,setState] = useContext(AppContext);


  const setCurrentUser = (item) => {
    setState(prevState => ({
      ...prevState,
      userProfile: item,
      isUserLogin: true
    }));
  };

  const handleSubmit = () => {
    if (fullName.length == 0) {
      alert("Enter your full name.");
    } else if (emailAddress.length == 0) {
      alert("Enter your Email-Address.");
    } else if (password.length == 0) {
      alert("Enter your password.");
    } else {
      axios
        .post(
          SIGNUP_API,
          {
            name: fullName,
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
            setCurrentUser(user);
            setFullName("");
            setEmailAddress("");
            setPassword("");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };



  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
      }}
    >
      <h2
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Create your account !!
      </h2>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="form-group"
        >
          <label style={{ marginTop: "10px" }} for="inputFullName">
            Full name
          </label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
            id="inputFullName"
            value={fullName}
            placeholder="Enter full name"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="form-group"
        >
          <label style={{ marginTop: "10px" }} for="inputEmail">
            Email address
          </label>
          <input
            type="email"
            style={{ marginTop: "10px" }}
            className="form-control"
            id="inputEmail"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="form-group"
        >
          <label style={{ marginTop: "10px" }} for="inputPassword">
            Password
          </label>
          <input
            type="password"
            style={{ marginTop: "10px" }}
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            handleSubmit();
          }}
          style={{ width: "100%", marginTop: "20px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;
