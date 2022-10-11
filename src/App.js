import React from "react";
import "./App.css";

import Milestone from "./components/milestone";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";

function App() {
  const [milestones, setMilestones] = React.useState([
    { date: " 01,01,1999", description: "hola mundo" },
    { date: " 01,01,2000", description: "hola mundo parte 2" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* {milestones.map((item) => {
  return <Milestone date={item.date} description={item.description} />;
})} */
