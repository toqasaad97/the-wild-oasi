import CabinCard from './CabinCard';

function CabinList({ cabins }) {
  // Check if cabins is null, undefined, or an empty array
  if (!cabins || cabins.length === 0) {
    return (
      <div className="text-center text-lg text-gray-500">
        <p>No cabins available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
