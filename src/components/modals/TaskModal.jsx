import React, { useState } from "react";
import FormMainHeading from "../shared/headings/FormMainHeading";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCloseLine,
} from "@remixicon/react";
import { v4 as uuidv4 } from "uuid";

import { useKanbanContext } from "../../hooks/board/KanbanProvider";
import useTaskCrud from "../../hooks/tasks/useTaskCrud";

import CloseButton from "../shared/buttons/CloseButton";

const TaskModal = ({ setToggleModal }) => {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [selectItem, setSelectItem] = useState("todo");

  const { activeBoardData } = useKanbanContext();
  const { handleAddTask } = useTaskCrud();

  const [subtaskInput, setSubtaskInput] = useState([
    {
      id: uuidv4(),
      value: "",
    },
  ]);

  const handleAddSubtask = (event) => {
    event.preventDefault();

    setSubtaskInput((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          value: "",
        },
      ];
    });
  };

  const handleDeleteSubtask = (id) => {
    setSubtaskInput(subtaskInput.filter((subtask) => subtask.id !== id));
  };

  const handleChangeSubtask = (event, id) => {
    const { value } = event.target;
    const updatedSubtasks = subtaskInput.map((subtask) =>
      subtask.id === id ? { ...subtask, value: value } : subtask,
    );
    setSubtaskInput(updatedSubtasks);
  };

  const handleSelectItem = (column) => {
    setToggleSelect(false);
    setSelectItem(column.label);
  };

  return (
    <div className="fixed flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-full w-full flex-col overflow-y-scroll bg-white">
        {/* <button
          onClick={(prev) => setToggleModal({ ...prev, isAddTaskOpen: false })}
          className="self-end p-2 text-2xl"
        >
          x
        </button> */}
        <div className="m-4 flex h-5 w-5 items-center justify-center self-end">
          <CloseButton isOpen={"isAddTaskOpen"} setToggle={setToggleModal} />
        </div>
        <div className="flex flex-col gap-5 px-10 pb-10 pt-2">
          <FormMainHeading title={"Add New Task"} />
          <form
            onSubmit={(event) => handleAddTask(event, selectItem)}
            className="flex flex-col gap-5 text-gray-500"
          >
            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="text-sm font-medium capitalize text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                name="task-title"
                className="w-full rounded-md border border-gray-400 p-2"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="text-sm font-medium capitalize text-gray-600"
              >
                Description
              </label>
              <textarea
                name="task-description"
                className="min-h-[10rem] w-full rounded-md border border-gray-400 p-2"
              ></textarea>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="text-sm font-medium capitalize text-gray-600"
              >
                Subtasks
              </label>
              <div className="flex flex-col gap-2">
                {subtaskInput.map((subtask) => {
                  return (
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="text"
                        name="task-subtask"
                        className="w-full rounded-md border border-gray-400 p-2"
                        onChange={(event) =>
                          handleChangeSubtask(event, subtask.id)
                        }
                        value={subtask.value}
                      />
                      <RiCloseLine
                        onClick={() => handleDeleteSubtask(subtask.id)}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                onClick={handleAddSubtask}
                className="w-full rounded-full bg-[#F0EFFA] px-4 py-2 text-sm font-bold capitalize text-[var(--brand-color)]"
              >
                + Add new subtask
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm font-medium capitalize text-gray-600"
              >
                Status
              </label>

              <div className="relative flex flex-col gap-4">
                <div
                  onClick={() => setToggleSelect(!toggleSelect)}
                  className="flex w-full items-center justify-between rounded-md border border-gray-400 p-2 text-sm"
                >
                  <p className="capitalize">{selectItem}</p>
                  {toggleSelect ? (
                    <RiArrowUpSLine className="h-5 w-5" />
                  ) : (
                    <RiArrowDownSLine className="h-5 w-5" />
                  )}
                </div>
                {toggleSelect && (
                  <ul className="absolute top-10 z-[999] flex w-full flex-col items-start gap-2 bg-white p-2 shadow-md">
                    {activeBoardData?.columns.map((column) => {
                      return (
                        <li
                          onClick={() => handleSelectItem(column)}
                          className="w-full text-sm capitalize"
                        >
                          {column.label}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <input
              type="submit"
              className="rounded-full bg-[var(--brand-color)] py-3 font-medium capitalize text-white"
              value={"create task"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
