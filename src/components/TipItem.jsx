import React from "react";
import PropTypes from "prop-types";

const TipItem = ({ tip, markComplete, deleteTip }) => {
  const { id, title, completed } = tip;

  const itemStyle = {
    backgroundColor: "black",
    padding: "20px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none",
  };

  const btnStyle = {
    background: "#4D5A5B",
    color: "#21B6A8",
    padding: "5px 8px",
    cursor: "pointer",
    float: "right",
    border: "none",
    borderRadius: "4px",
  };

  return (
    <div style={itemStyle}>
      <p>
        <input
          type="checkbox"
          onChange={() => markComplete(id)}
          checked={completed}
        />{" "}
        {title}
        <button onClick={() => deleteTip(id)} style={btnStyle}>
          Delete
        </button>
      </p>
    </div>
  );
};

// ✅ Prop types
TipItem.propTypes = {
  tip: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTip: PropTypes.func.isRequired,
};

export default TipItem;
