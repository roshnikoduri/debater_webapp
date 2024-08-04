import React, { useState } from "react";
import axios from "axios";
import { CREATE_DISCUSSION_API } from "../constant/api";

const CreateDiscussion = () => {
  const [discussionName, setDiscussionName] = useState("");
  const [discussionDetails, setDiscussionDetails] = useState("");

  const handleDiscussion = () => {
    if (discussionName.length == 0) {
      alert("Enter discussion name.");
    } else if (discussionDetails.length == 0) {
      alert("Enter discussion details");
    } else {
      axios
        .post(
          CREATE_DISCUSSION_API,
          {
            topic_name: discussionName,
            topic_description: discussionDetails,
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
            setDiscussionName("");
            setDiscussionDetails("");
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
        marginTop: "20px",
        marginBottom: "10px",
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
        Create a Discussion !!
      </h2>

      <form>
        <label style={{ marginTop: "10px", fontWeight: "bold" }} for="Header">
          Heading
        </label>

        <input
          id="Header"
          type="Heading"
          className="form-control"
          value={discussionName}
          placeHolder="Enter a Heading"
          style={{ marginTop: "2px" }}
          onChange={(e) => setDiscussionName(e.target.value)}
        ></input>
        <label
          style={{ marginTop: "10px", fontWeight: "bold" }}
          for="DiscussionPost"
        >
          Post
        </label>

        <textarea
          id="DiscussionPost"
          type="Post"
          value={discussionDetails}
          className="form-control"
          placeHolder="Enter a Post"
          style={{ marginTop: "2px", height: "200px" }}
          onChange={(e) => setDiscussionDetails(e.target.value)}
        />
      </form>

      <button
        onClick={() => {
          handleDiscussion();
        }}
        style={{ width: "100%", marginTop: "20px" }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateDiscussion;
