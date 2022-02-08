import React from "react";

const VoteButtons = ({total, score, handleAddScore, handleMinusScore }) => {
  return (
    <div>
      <button onClick={() => handleAddScore(score)}>+</button>
      <h2>{total < score || total > score ? total : score}</h2>
      <button onClick={() => handleMinusScore(score)}>-</button>
    </div>
  );
};

export default VoteButtons;
