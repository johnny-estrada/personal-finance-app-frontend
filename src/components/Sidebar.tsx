import { Link } from "react-router";
import Navigation from "./ui/Navigation";
import MobileNavigation from "./ui/MobileNavigation";
import Logo from "./ui/Logo";

const Sidebar = () => {
  return (
    <>
      <MobileNavigation />
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[300px] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-800 px-6 pb-4 rounded-r-2xl">
          <div className="flex lg:px-3 lg:py-10 shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
