import React, { createContext, useContext, useEffect, useState } from "react";

import defaultTasks from "../../json/defaultBoard.json";
import findActiveBoard from "../../helpers/board/findActiveBoard";

const KanbanBoardContext = createContext();

const KanbanBoardProvider = ({ children }) => {
  const [board, setBoard] = useState(
    JSON.parse(localStorage.getItem("kanban-board")) || defaultTasks,
  );

  const [activeBoardData, setActiveBoardData] = useState({});

  const { boards } = board;

  const handleBoardActive = (boardID) => {
    setBoard((prev) => {
      return {
        ...prev,
        boards: prev.boards.map((board) =>
          board.boardID === boardID
            ? { ...board, status: true }
            : { ...board, status: false },
        ),
      };
    });
  };

  const handleActiveBoardData = () => {
    const activeBoard = findActiveBoard(boards);
    setActiveBoardData(activeBoard);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("kanban-board"))) {
      localStorage.setItem("kanban-board", JSON.stringify(board));
      return;
    }
    localStorage.setItem("kanban-board", JSON.stringify(defaultTasks));
  }, [board]);

  useEffect(() => {
    const activeBoard = findActiveBoard(boards);
    setActiveBoardData(activeBoard);
  }, [board]);

  return (
    <KanbanBoardContext.Provider
      value={{
        board,
        activeBoardData,
        setBoard,
        handleBoardActive,
        handleActiveBoardData,
      }}
    >
      {children}
    </KanbanBoardContext.Provider>
  );
};

export const useKanbanContext = () => useContext(KanbanBoardContext);

export default KanbanBoardProvider;
