import React, { createContext, useContext, useEffect, useState } from "react";
import { COMMENT_LIST, CREATE_COMMENT } from "../constant/api";
import axios from "axios";
import AppContext from "../component/AppContext";
const DiscussionDetails = () => {
  const [comment, setComment] = useState([]);
  const [yourComment, setYourComment] = useState("");
  const [state, setState] = useContext(AppContext);
  console.log('====================================');
  console.log('state----'+JSON.stringify(state));
  console.log('====================================');
  const { topic_description, topic_name, _id } = state.currentDiscussion;


  useEffect(() => {
    _sendRequestToGetComment();
  }, []);

  const _sendRequestToGetComment = () => {
    let commentUrl = COMMENT_LIST + _id;
    axios.get(commentUrl).then((response) => {
      const { code, commentList } = response.data;
      if (code == 200) {
        setComment(commentList);
      }
    });
  };

  const _sendRequestToCreateComment = () => {
 
   
    if (yourComment.length == 0) {
      alert("Please enter your comment !!");
      return;
    }
   

    axios
      .post(
        CREATE_COMMENT,
        {
          comment: yourComment,
          user: "Test User",
          topic_id: _id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        const { code, message } = response.data;
        alert(message);
        if (code == 200) {
          _sendRequestToGetComment();
          setYourComment("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{topic_name}</p>
            <footer className="blockquote-footer">{topic_description}</footer>
          </blockquote>
        </div>
      </div>

      <ol class="list-group" style={{ marginTop: "20px" }}>
        {comment.map((item) => {
          const { user_name, comment } = item;
          return (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{user_name}</div>
                {comment}
              </div>
            </li>
          );
        })}
      </ol>
      <div
        style={{
          width: "50%",
          marginTop: "20px",
          bottom: "20px",
          flexDirection: "column",
        }}
      >
        <textarea
          id="DiscussionPost"
          type="Post"
          value={yourComment}
          className="form-control"
          placeHolder="Enter a comment"
          style={{ height: "100px", marginTop: "20px" }}
          onChange={(e) => setYourComment(e.target.value)}
        />
        <button
          onClick={() => {
            _sendRequestToCreateComment();
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

export default DiscussionDetails;
