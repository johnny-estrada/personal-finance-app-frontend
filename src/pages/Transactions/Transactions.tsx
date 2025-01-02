import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Heading from "../../components/ui/Heading";
import Table from "../../components/Table";

export default function Transactions() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[300px]">
        <Header />

        <main>
          {/* Main content */}
          <Heading className="px-10">Transactions</Heading>
          <div className="px-4 sm:px-6 lg:px-10 lg:pt-8">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
}
