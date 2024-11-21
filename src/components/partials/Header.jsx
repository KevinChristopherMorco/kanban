import React from "react";
import { RiAddFill, RiArrowDownSLine, RiMore2Line } from "@remixicon/react";

import { useKanbanContext } from "../../hooks/board/KanbanProvider";
import useScreenResponsiveness from "../../hooks/responsive/useScreenResponsiveness";

const Header = () => {
  const { activeBoardData } = useKanbanContext();
  console.log(activeBoardData);
  const {
    screenSize: { sm, md },
    isLargeScreen,
    isSmallScreen,
  } = useScreenResponsiveness();
  return (
    <nav className="flex h-[10vh] h-full w-full items-center gap-2 border-b border-gray-200 bg-white p-6 shadow md:col-start-2 md:row-start-1 md:justify-between md:gap-0">
      {sm && (
        <div className="flex w-[10%] items-center gap-5">
          <div className="h-5 h-[2rem] w-6 bg-[url(/src/assets/images/logo/logo-mobile.svg)] bg-no-repeat md:w-full md:bg-[url(/src/assets/images/logo/logo-dark.svg)]" />
        </div>
      )}

      <div className="flex w-full items-center justify-between md:justify-between md:gap-10 lg:justify-between">
        <div className="flex items-center gap-1">
          <h4 className="text-lg font-bold capitalize md:text-xl xl:text-2xl">
            {activeBoardData?.boardTitle}
          </h4>
          {isSmallScreen && <RiArrowDownSLine className="h-4 w-4" />}
        </div>
        <div className="flex items-center gap-1">
          <div className="flex cursor-pointer items-center justify-center rounded-2xl bg-[var(--brand-color)] px-3 py-1 font-bold text-white transition-colors hover:bg-[var(--link-hover-color)] md:rounded-full md:py-2 xl:px-5 xl:py-3">
            <RiAddFill className="h-5 w-5" />
            {(md || isLargeScreen) && <p>Add new task</p>}
          </div>
          <RiMore2Line />
        </div>
      </div>
    </nav>
  );
};

export default Header;
