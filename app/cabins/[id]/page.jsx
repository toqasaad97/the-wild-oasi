import { getCabin } from "../../../lib/data-service";
import { Suspense } from "react";
import Spinner from "../../../components/Spinner";
import { Detalis } from "../../../components/Detalis";
import Reservation from"../../../components/Reservation";


export default async function Page({ params }) {
  const cabin = await getCabin(params.id);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Suspense fallback={<Spinner />}>
        <Detalis cabin={cabin} />
      </Suspense>
      <Reservation cabin={cabin} />


    </div>
  );
}