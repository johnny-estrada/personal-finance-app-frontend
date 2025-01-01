import React from "react";
import { Link } from "react-router";

type Card = {
  title: string;
  link: string;
  href: string;
  children: React.ReactNode;
};

export default function Card({ title, link, href, children }: Card) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <header className="flex justify-between px-4 py-5 sm:py-8 sm:px-8">
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        <h2 className="text-xl font-bold">{title}</h2>
        <Link
          to={href}
          className="flex items-center justify-center  gap-4 text-sm text-stone-500 hover:text-stone-600"
        >
          {link}
          <img
            className="h-2 w-auto"
            src="src\assets\icons\icon-caret-right.svg"
          />
        </Link>
      </header>
      <div className="px-4 py-5 sm:pb-8 sm:pt-0 sm:px-8">
        {/* body */}
        {children}
      </div>
    </div>
  );
}
