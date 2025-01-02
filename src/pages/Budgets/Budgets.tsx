import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Heading from "../../components/ui/Heading";

export default function Budgets() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[300px]">
        <Header />

        <main>
          {/* Main content */}
          <Heading className="px-10">Budgets</Heading>
          <div className="px-4 sm:px-6 lg:px-10 lg:pt-8">
            <div className="flex py-8 gap-6">content goes here</div>
          </div>
        </main>
      </div>
    </div>
  );
}
