import { getCabin } from "../../../lib/data-service";
import { Suspense } from "react";
import Spinner from "../../../components/Spinner";
import { Detalis } from "../../../components/Detalis";
import Reservation from "../../../components/Reservation";

export default async function Page({ params }) {
  const cabin = await getCabin(params.id);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-6 sm:px-10">
      <Suspense fallback={<Spinner />}>
        <Detalis cabin={cabin} />
      </Suspense>


      <div className="mt-12">
        <div className="grid grid-cols-1  gap-8 ">

          <div className="order-2">
            <Reservation cabin={cabin} />
          </div>
        </div>
      </div>
    </div>
  );
}
