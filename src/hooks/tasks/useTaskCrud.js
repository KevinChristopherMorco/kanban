import React from "react";

import { useKanbanContext } from "../board/KanbanProvider";
import useValidateTask from "./useValidateTask";
import getCurrentDate from "../../helpers/time/getCurrentDate";

import { v4 as uuidv4 } from "uuid";

const useTaskCrud = () => {
  const { board, activeBoardData, setBoard } = useKanbanContext();
  const handleAddTask = (event, status) => {
    event.preventDefault();
    const { timestamp } = getCurrentDate();

    const data = new FormData(event.target);
    const subtasks = [];

    const columnID = activeBoardData?.columns.find(
      (x) => x.label === status,
    ).columnID;

    const testData = {
      taskID: `tsk-${uuidv4()}`,
      columnID: columnID,
      taskTitle: data.get("task-title"),
      taskDescription: data.get("task-description"),
      subtasks: subtasks,
      taskStatus: status,
      dateCreated: timestamp,
      dateUpdated: timestamp,
    };

    data.forEach((value, key) => {
      if (key === "task-subtask")
        subtasks.push({
          subtaskID: `sbtsk-${uuidv4()}`,
          subtaskTitle: value,
          isDone: false,
        });
    });

    setBoard((prev) => {
      return {
        ...prev,
        boards: prev.boards.map((board) => {
          return board.boardID === activeBoardData.boardID
            ? {
                ...activeBoardData,
                columns: board.columns.map((column) => {
                  return column.columnID === columnID
                    ? { ...column, tasks: [...column.tasks, testData] }
                    : column;
                }),
              }
            : board;
        }),
      };
    });

    // board.columns.map((column) => {
    //     return column.columnID === columnID
    //       ? { ...column, testData }
    //       : column;
    //   })

    console.log(board);
    console.log(activeBoardData);
  };

  return { handleAddTask };
};

export default useTaskCrud;
