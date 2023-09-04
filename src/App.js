import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage titleName="Chat" />}></Route>
    </Routes>
  );
}
