import React from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Discussion from '../screens/Discussion';
import Signup from '../screens/Signup';
import Turnament from '../screens/Turnament';
import NoPage from '../screens/NoPage';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateDiscussion from '../screens/CreateDiscussion';
import Debate from '../screens/Debate';
import DiscussionDetails from '../screens/DiscussionDetails';
import NavBar from '../component/NavBar';

const index = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        {/* <Route index element={<Home />} /> */}
        <Route path="/turnament" element={<Turnament />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/debate" element={<Debate />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/discussion/discussionDetails" element={<DiscussionDetails/>} />
        <Route path="/createDiscussion" element={<CreateDiscussion />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default index
