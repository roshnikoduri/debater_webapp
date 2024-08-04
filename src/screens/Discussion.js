import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { DISCUSSION_LIST_API } from "../constant/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AppContext from "../component/AppContext";
const Discussion = () => {
  const [diucussion, setDiscussion] = useState([]);
  const [state, setState] = useContext(AppContext);
  const navigation = useNavigate();


  const setCurrentDiscussion = (item) => {
    setState(prevState => ({
      ...prevState,
      currentDiscussion: item
    }));
  };

  useEffect(() => {
    axios.get(DISCUSSION_LIST_API).then((response) => {
      const { code, topicList } = response.data;
      if (code == 200) {
        setDiscussion(topicList);
      }
    });
  }, []);

  const _navigateToDetails = (item) => {
    setCurrentDiscussion(item);
    navigation("discussionDetails");
  };

  const _createTime = (date) => {
    return moment(date).format("MMM Do YYYY");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "30px",
        }}
      >
        <h2
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "20px",
            paddingLeft: "2%",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Discussion Lists !!
        </h2>
        <a href={"/createDiscussion"}>
          <button
            style={{ height: "50px" }}
            type="button"
            class="btn btn-primary"
          >
            Create Discussion
          </button>
        </a>
      </div>

      {diucussion.map((item) => {
        return (
          <div
            onClick={() => {
              _navigateToDetails(item);
            }}
            style={{
              paddingLeft: "2%",
              paddingRight: "2%",
              paddingTop: "10px",
            }}
            className="list-group"
          >
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <div
                  style={{
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h5 className="mb-1">{item.topic_name}</h5>
                  <p className="mb-1">{item.topic_description}</p>
                </div>
                <small>{_createTime(item.createdAt)}</small>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Discussion;
