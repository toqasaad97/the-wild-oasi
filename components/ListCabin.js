import { getCabins } from '../lib/data-service';
import CabinCard from './CabinCard';


 async function ListCabin({ filter }) {
  const cabins = await getCabins()
  if (!cabins.length) {
    return <p>No cabins found.</p>;
  }
  const filteredCabins = cabins.filter((cabin) => {
    if (filter === "all") return true;
    if (filter === "small") return cabin.maxCapacity <= 3;
    if (filter === "medium")
      return cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7;
    if (filter === "large") return cabin.maxCapacity >= 8;
  });

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default ListCabin;