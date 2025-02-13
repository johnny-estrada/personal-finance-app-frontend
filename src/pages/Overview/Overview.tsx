import DataDisplay from "../../components/DataDisplay";
import Card from "../../components/ui/Card";
import Sidebar from "../../components/Sidebar";
import StackedList from "../../components/StackedList";
import TotalSaved from "./components/PotsOverview";
import Header from "../../components/Header";
import PieCharts from "../../components/PieGraph";
import Chip from "../../components/ui/Chip";
import SeparateCards from "../../components/ui/SeparateCards";
import Heading from "../../components/ui/Heading";

export default function Overview() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[300px]">
        <Header />

        <main>
          {/* Main content */}
          <Heading className="px-10">Overview</Heading>
          <div className="px-4 sm:px-6 lg:px-10 lg:pt-8">
            <DataDisplay />
            <div className="flex py-8 gap-6">
              <div className="flex flex-col gap-6 min-w-[60%]">
                <Card title="Pots" link="See Details" href="/pots">
                  <TotalSaved />
                </Card>
                <Card title="Transactions" link="View All" href="/transactions">
                  <StackedList />
                </Card>
              </div>
              <div className="flex flex-col gap-6 min-w-[38%]">
                <Card title="Budgets" link="See Details" href="/budgets">
                  <div className="flex items-center">
                    <PieCharts />
                    <div className="flex flex-3 flex-col gap-4">
                      <Chip
                        title="Entertainment"
                        amount="$50.00"
                        color="border-teal-700"
                      />
                      <Chip
                        title="Bills"
                        amount="$750.00"
                        color="border-sky-300"
                      />
                      <Chip
                        title="Dining Out"
                        amount="$75.00"
                        color="border-orange-200"
                      />
                      <Chip
                        title="Personal Care"
                        amount="$100.00"
                        color="border-zinc-500"
                      />
                    </div>
                  </div>
                </Card>

                <Card
                  title="Recurring Bills"
                  link="See Details"
                  href="/recurring-bills"
                >
                  <div className="flex flex-col gap-3">
                    <SeparateCards />
                    <SeparateCards />
                    <SeparateCards />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
