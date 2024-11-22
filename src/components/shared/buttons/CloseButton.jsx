import React from "react";
import { RiCloseLine } from "@remixicon/react";

const CloseButton = ({ setToggle, isOpen }) => {
  return (
    <button
      onClick={() => setToggle((prev) => ({ ...prev, [isOpen]: false }))}
      className="rounded-full bg-[var(--brand-color)] p-1 text-2xl text-white"
    >
      <RiCloseLine />
    </button>
  );
};

export default CloseButton;
