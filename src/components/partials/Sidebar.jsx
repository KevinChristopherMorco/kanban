import React from "react";
import { RiDashboardLine, RiMoonClearFill, RiSunFill } from "@remixicon/react";

import {
  useKanbanContext,
} from "../../hooks/board/KanbanProvider";

const Sidebar = () => {
  const {
    board: { boards },
    handleBoardActive,
  } = useKanbanContext();

  const handleChangeList = (board) => {
    handleBoardActive(board.boardID);
  };
  
  return (
    <div className="col-start-1 row-span-2 flex w-full flex-col border-r border-gray-200 transition-colors md:gap-4">
      <div className="flex h-[10vh] items-center justify-center border-b border-gray-200 px-8 xl:h-[15vh]">
        <div className="h-5 h-[2rem] w-full self-center bg-[url(/src/assets/images/logo/logo-mobile.svg)] bg-no-repeat md:bg-[url(/src/assets/images/logo/logo-dark.svg)]" />
      </div>
      <div className="flex grow flex-col justify-between pb-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wide tracking-widest text-gray-400 md:px-8">
            all boards (1)
          </h4>
          <ul className="flex flex-col gap-2 pr-5 capitalize text-gray-600">
            {boards?.map((board, index) => {
              return (
                <li
                  key={index}
                  className={`${board.status ? "bg-[var(--brand-color)] font-bold text-white" : "transition-colors hover:bg-[var(--link-hover-color)] hover:text-white"} cursor-pointer rounded-r-full font-bold tracking-wide text-gray-500`}
                  onClick={() => handleChangeList(board)}
                >
                  <div className="flex items-center gap-3 md:px-8 md:py-3">
                    <RiDashboardLine className="h-5 w-5" />
                    <p>{board.boardTitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-5 self-center rounded-xl bg-[#F4F7FD] md:px-8 md:py-5">
          <RiMoonClearFill className="h-5 w-5 text-gray-500" />
          <div className="flex h-5 w-10 cursor-pointer items-center rounded-full bg-[var(--brand-color)]">
            <div className="h-4 w-4 rounded-full bg-white"></div>
          </div>
          <RiSunFill className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
