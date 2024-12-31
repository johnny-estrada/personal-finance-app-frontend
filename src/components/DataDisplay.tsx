import React from "react";
import data from "../api/data.json";

const stats = [
  { name: "Current Balance", stat: "$4,836.00" },
  { name: "Income", stat: "$3,814.25" },
  { name: "Expenses", stat: "$1,700.50" },
];

export default function DataDisplay() {
  return (
    <div>
      {/* <p>{data.balance.current}</p> */}
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((item, i) => {
          const isFirst = i === 0;
          return (
            <div
              key={item.name}
              className={`
                overflow-hidden
                rounded-xl
                p-6
                shadow
                sm:p-6
                ${isFirst ? "bg-neutral-800" : "bg-white"}
              `}
            >
              <dt
                className={`
                  truncate
                  text-sm
                  font-medium
                  ${isFirst ? "text-white" : "text-stone-500"}
                `}
              >
                {item.name}
              </dt>
              <dd
                className={`
                  mt-3
                  text-[32px]
                  font-semibold
                  tracking-tight
                  ${isFirst ? "text-white" : "text-neutral-800"}
                `}
              >
                {item.stat}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
