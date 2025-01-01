import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<Overview />} />
        <Route index={true} path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}
