import React, { useState } from "react";

const useModal = () => {
  const [toggleModal, setToggleModal] = useState({ isAddTaskOpen: false });

  return { toggleModal, setToggleModal };
};

export default useModal;
