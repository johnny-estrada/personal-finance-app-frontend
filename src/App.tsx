import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import RecurringBills from "./pages/RecurringBills";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<RecurringBills />} />
      </Routes>
    </BrowserRouter>
  );
}
