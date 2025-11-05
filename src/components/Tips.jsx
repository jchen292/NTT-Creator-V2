import React from "react";
import TipItem from "./TipItem";
import PropTypes from "prop-types";

const Tips = ({ tips, markComplete, deleteTip }) => {
  return (
    <>
      {tips?.map((tip) => (
        <TipItem
          key={tip.id}
          tip={tip}
          markComplete={markComplete}
          deleteTip={deleteTip}
        />
      ))}
    </>
  );
};

// ✅ PropTypes validation
Tips.propTypes = {
  tips: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTip: PropTypes.func.isRequired,
};

export default Tips;
