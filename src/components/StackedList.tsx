import React from "react";

const transactions = [
  {
    name: "Leslie Alexander",
    amount: "+$75.50",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    transactionDate: "19 Aug 2024",
  },
  {
    name: "Michael Foster",
    amount: "-$55.50",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    transactionDate: "19 Aug 2024",
  },
  {
    name: "Dries Vincent",
    amount: "-$42.30",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    transactionDate: "18 Aug 2024",
  },
  {
    name: "Lindsay Walton",
    amount: "+$120.00",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    transactionDate: "17 Aug 2024",
  },
  {
    name: "Courtney Henry",
    amount: "-$65.00",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    transactionDate: "17 Aug 2024",
  },
];

export default function StackedList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {transactions.map((transaction) => (
        <li
          key={transaction.imageUrl}
          className="flex justify-between gap-x-6 py-5 first:pt-0 last:pb-0"
        >
          <div className="flex items-center min-w-0 gap-x-4">
            <img
              alt=""
              src={transaction.imageUrl}
              className="size-10 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-bold text-neutral-800">
                {transaction.name}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            {transaction.amount[0] === "+" ? (
              <p className="text-sm font-bold text-teal-700">
                {transaction.amount}
              </p>
            ) : (
              <p className="text-sm font-bold text-neutral-800">
                {transaction.amount}
              </p>
            )}
            <p className="mt-2 text-xs text-stone-500">
              {transaction.transactionDate}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
