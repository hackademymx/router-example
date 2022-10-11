import React from "react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <span onClick={() => navigate("/home")}>home</span>

      <span onClick={() => navigate("/milestones")}>milestones</span>
    </div>
  );
}
