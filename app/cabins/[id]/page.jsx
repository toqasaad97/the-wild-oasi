import { getCabin } from "../../../lib/data-service";

import { Suspense } from "react";

import Spinner from "../../../components/Spinner";

import { Detalis } from "../../../components/Detalis";


export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.id);

  return {
    title: `Cabin ${cabin.name}`,
    description: cabin.description,
    image: cabin.image,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.id);
  console.log(cabin);

  return (
    <div className="max-w-6xl mx-auto mt-8">


      <Suspense fallback={<Spinner />}>
      <Detalis cabin={cabin} />
        </Suspense>

    </div>
  );
}
