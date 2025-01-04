import Chip from "../../../components/ui/Chip";
import Card from "../../../components/ui/Card";
import TotalSaved from "./TotalSaved";

const PotsOverview = () => {
  return (
    <Card title="Pots" link="See Details" href="/pots">
      <div className="flex gap-5">
        <div className="flex  items-center gap-2 bg-stone-100 p-5 flex-1 rounded-xl">
          <TotalSaved />
        </div>
        <div className="grid grid-cols-2 flex-1 gap-4">
          <Chip title="Savings" amount="$159" color="border-teal-700" />
          <Chip title="Gift" amount="$40" color="border-sky-300" />
          <Chip title="Concert Ticket" amount="$110" color="border-zinc-500" />
          <Chip title="New Laptop" amount="$10" color="border-orange-200" />
        </div>
      </div>
    </Card>
  );
};

export default PotsOverview;
