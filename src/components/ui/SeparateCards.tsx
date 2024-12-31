import React from "react"

interface ISeparateCards {
  title: string;
  content: string;
  color: string;
}

const items = [
    { id: 1 },
    // More items...
  ]
  
  export default function SeparateCards({title, content, color}: ISeparateCards) {
    return (
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-lg bg-stone-100 px-4 py-5 shadow border-l-4 border-teal-700">
            <div className="flex justify-between">
              <h4 className="text-sm text-stone-500">Paid Bills</h4>
              <p className="text-sm font-bold text-neutral-800">$190.00</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  