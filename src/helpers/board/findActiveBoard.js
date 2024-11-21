import React from "react";

const findActiveBoard = (board) => {
  return board.find((board) => board.status);
};

export default findActiveBoard;
