import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import defaultTasks from "../../json/defaultBoard.json";
import useKanbanBoard, {
  useKanbanContext,
} from "../../hooks/board/KanbanProvider";

const Home = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 1, title: "Eat" },
  //   { id: 2, title: "Sleep" },
  //   { id: 3, title: "Travel" },
  // ]);

  // const [board, setBoard] = useState(
  //   JSON.parse(localStorage.getItem("kanban-board")) || defaultTasks,
  // );

  const { activeBoardData } = useKanbanContext();

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <p className="text-xl font-bold"> Your Kanban board here</p> */}

      <div className="grid h-full grid-cols-[17.5em_17.5em_17.5em] gap-x-10 md:gap-x-12 lg:grid-cols-[18.5em_18.5em_18.5em]">
        {activeBoardData?.columns?.map((column, index) => {
          return (
            <div key={index} className="flex h-full flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                <h4 className="text-[.75rem] font-bold uppercase tracking-[.275em] text-gray-400">
                  {column.label} ({column.tasks.length})
                </h4>
              </div>
              <div className="flex flex-col gap-5">
                {column.tasks.map((task, index) => {
                  console.log(column);
                  return (
                    <div
                      key={index}
                      className="group flex h-fit cursor-pointer flex-col gap-1 rounded-md bg-[var(--card-bg-color)] p-4 shadow-md md:px-4 md:py-6"
                    >
                      <p className="transtion-colors font-bold text-gray-800 delay-100 duration-200 group-hover:text-[var(--brand-color)]">
                        {task.taskTitle}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        0 of {task?.subtasks?.length} subtasks
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </DndProvider>
  );
};

export default Home;
