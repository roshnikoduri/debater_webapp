import React, { useState } from "react";

const Debate = () => {
  const debateList = [
    "The United States should implement a universal basic income.",
    "The United States federal government should forgive all federal student loan debt.",
    "The United States federal government should increase its efforts to combat climate change.",
    "The United States federal government should ban single-use plastics.",
    "The United States federal government should substantially increase its regulation of cryptocurrency.",
    "The United States federal government should implement a public option for health insurance.",
    "The United States should abolish the Electoral College.",
    "The United States should adopt a system of universal healthcare.",
    "The United States should transition to a proportional representation voting system.",
    "The United States should ban the sale of all semi-automatic firearms.",
    "The United States should implement a carbon tax.",
    "The United States should increase its funding for space exploration.",
    "The United States should ban private prisons.",
    "The United States should significantly reduce its military presence in foreign countries.",
    "The United States should pass comprehensive immigration reform.",
    "The United States should make community college free for all students.",
    "The United States should ban all fossil fuel subsidies.",
    "The United States should adopt a single-payer healthcare system.",
    "The United States should significantly increase its minimum wage.",
    "The United States ought to ban the use of facial recognition technology for law enforcement purposes.",
  ];
  const [selectedDebate, setDebate] = useState();

  const generateDebate = () => {
    const rendomNumber = Math.floor(Math.random() * 20);
    const debate = debateList[rendomNumber];
    setDebate(debate);
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          generateDebate();
        }}
        style={{ marginTop: "20px", width: "70%" }}
        type="submit"
        className="btn btn-secondary"
      >
        Generate Debate
      </button>
      <h2 style={{ margin: "20px" }}>{selectedDebate}</h2>
    </div>
  );
};

export default Debate;
