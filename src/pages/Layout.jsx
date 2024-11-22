import React from "react";
import { Outlet } from "react-router-dom";

import useScreenResponsiveness from "../hooks/responsive/useScreenResponsiveness";
import useModal from "../hooks/modal/useModal";

import Sidebar from "../components/partials/Sidebar";
import Header from "../components/partials/Header";
import TaskModal from "../components/modals/TaskModal";

const Layout = () => {
  const {
    screenSize: { md },
    isLargeScreen,
  } = useScreenResponsiveness();
  const {
    toggleModal: { isAddTaskOpen },
    setToggleModal,
  } = useModal();
  return (
    <div className="flex min-h-full flex-col md:grid md:grid-cols-[auto_7fr] md:grid-rows-[10vh_8fr] md:gap-0 xl:grid-rows-[15vh_8fr]">
      <Header setToggleModal={setToggleModal} />
      <main className="main-container w-full grow overflow-x-scroll bg-[var(--main-bg-color)] p-6 md:col-start-2 md:row-start-2">
        <Outlet />
      </main>
      {(md || isLargeScreen) && <Sidebar />}

      {isAddTaskOpen && <TaskModal setToggleModal={setToggleModal} />}
    </div>
  );
};

export default Layout;
