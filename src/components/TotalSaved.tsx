import React from "react";
import Chip from "./ui/chip";

const TotalSaved = () => {
  return (
    <div className="flex gap-5">
      <div className="flex  items-center gap-2 bg-stone-100 p-5 flex-1 rounded-xl">
        <img className="w-auto h-10" src="src/assets/icons/icon-pot.svg" />
        <div className="ml-4">
          <p className="text-sm text-stone-500 mb-3">Total Saved</p>
          <p className="text-[32px] font-bold">$850</p>
        </div>
      </div>
      <div className="grid grid-cols-2 flex-1 gap-4">
        <Chip title="Savings" amount="$159" color="border-teal-700" />
        <Chip title="Gift" amount="$40" color="border-sky-300" />
        <Chip title="Concert Ticket" amount="$110" color="border-zinc-500" />
        <Chip title="New Laptop" amount="$10" color="border-orange-200" />
      </div>
    </div>
  );
};

export default TotalSaved;
