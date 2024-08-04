import React, { useEffect, useState } from "react";
import { TURNAMENT_LIST } from "../constant/api";
import axios from "axios";

const Turnament = () => {
  const [turnaments, setTurnament] = useState([]);

  useEffect(() => {
    axios.get(TURNAMENT_LIST).then((response) => {
      const { code, turnamentList } = response.data;
      if (code == 200) {
        setTurnament(turnamentList);
      }
    });
  }, []);

  return (
    <>
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
        Turnament Lists !!
      </h2>
      {turnaments.map((item) => {
        const { Tournament, Dates, City, Registration } = item;
        return (
          <div
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
                  <h5 className="mb-1">{Tournament}</h5>
                  <h6 className="mb-1">Date : {Dates}</h6>
                  <h6 className="mb-1">City : {City}</h6>
                  <h6 className="mb-1">Registration : {Registration}</h6>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Turnament;
