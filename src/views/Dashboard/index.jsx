import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "../../components/sidebar";
import Home from "../Home";

export default function Dashboard() {
  return (
    <div className="contenedor">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/milestones" element={<div>milestones</div>} />
        </Routes>
      </div>
    </div>
  );
}
