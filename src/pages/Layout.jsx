import React from "react";
import { Outlet } from "react-router-dom";

import useScreenResponsiveness from "../hooks/responsive/useScreenResponsiveness";

import Sidebar from "../components/partials/Sidebar";
import Header from "../components/partials/Header";
import FormMainHeading from "../components/shared/headings/FormMainHeading";
import { RiArrowDownSLine } from "@remixicon/react";

const Layout = () => {
  const {
    screenSize: { md },
    isLargeScreen,
  } = useScreenResponsiveness();
  return (
    <div className="flex min-h-full flex-col md:grid md:grid-cols-[auto_7fr] md:grid-rows-[10vh_8fr] md:gap-0 xl:grid-rows-[15vh_8fr]">
      <Header />
      <main className="w-full grow overflow-x-scroll bg-[var(--main-bg-color)] p-6 md:col-start-2 md:row-start-2">
        <Outlet />
      </main>
      {(md || isLargeScreen) && <Sidebar />}

      <div className="fixed flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
        <div className="h-full w-full overflow-y-scroll bg-white">
          <div className="flex flex-col gap-10 p-10">
            <FormMainHeading title={"Add New Task"} />
            <form action="" className="flex flex-col gap-5 text-gray-500">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="text-sm font-medium capitalize text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
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
                <textarea className="min-h-[10rem] w-full rounded-md border border-gray-400 p-2"></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="text-sm font-medium capitalize text-gray-600"
                >
                  Subtasks
                </label>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-400 p-2"
                  />
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-400 p-2"
                  />
                </div>
                <button className="w-full rounded-full bg-[#F0EFFA] px-4 py-2 text-sm font-bold capitalize text-[var(--brand-color)]">
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

                <div className="flex w-full items-center justify-between rounded-md border border-gray-400 p-2 text-sm">
                  <p>Todo</p>
                  <RiArrowDownSLine className="h-5 w-5" />
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
    </div>
  );
};

export default Layout;
