import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";

import KanbanBoardProvider from "./hooks/board/KanbanProvider";

import Layout from "./pages/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <KanbanBoardProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </KanbanBoardProvider>
    </BrowserRouter>
  );
}

export default App;
