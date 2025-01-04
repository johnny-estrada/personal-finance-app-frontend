import { NavLink } from "react-router";

const navigation = [
  {
    name: "Overview",
    href: "/",
    icon: "src/assets/icons/icon-nav-overview.svg",
    current: true,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: "src/assets/icons/icon-nav-transactions.svg",
    current: false,
  },
  {
    name: "Budgets",
    href: "/budgets",
    icon: "src/assets/icons/icon-nav-budgets.svg",
    current: false,
  },
  {
    name: "Pots",
    href: "/pots",
    icon: "src/assets/icons/icon-nav-pots.svg",
    current: false,
  },
  {
    name: "Recurring bills",
    href: "/recurring-bills",
    icon: "src/assets/icons/icon-nav-recurring-bills.svg",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-ml-6 -mr-.5 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-stone-100 text-neutral-800 border-l-4 border-teal-700 group flex gap-x-3 rounded-r-xl px-8 py-4 font-semibold items-center pointer-events-none"
                      : "text-zinc-400 hover:text-white group flex gap-x-3 rounded-r-xl px-8 py-4 font-semibold items-center"
                  }
                >
                  <img
                    src={item.icon}
                    aria-hidden="true"
                    // className="size-5 shrink-0"
                    className={classNames(
                      item.current
                        ? ""
                        : "text-gray-400 group-hover:text-white",
                      "h-6 w-6 shrink-0 m-auto lg:mr-4 lg:ml-0",
                    )}
                  />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li className="mt-auto">
          <NavLink
            to="#"
            className="group -mx-2 flex items-center gap-x-3 rounded-md p-2 font-semibold text-zinc-400 hover:text-white"
          >
            <img
              src="src/assets/icons/icon-minimize-menu.svg"
              aria-hidden="true"
              className="size-5 shrink-0"
            />
            Minimize Menu
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
