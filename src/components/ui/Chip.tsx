import React from "react";

interface IChip {
  title: string;
  amount: string;
  color: string;
}

const Chip = ({ title, amount, color }: IChip) => {
  return (
    <div className={`border-l-4 ${color} px-4`}>
      <p className="text-xs text-stone-500 pb-1">{title}</p>
      <p className="text-sm font-bold text-neutral-800">{amount}</p>
    </div>
  );
};

export default Chip;
