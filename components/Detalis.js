import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from './TextExpander';

export function Detalis({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border border-primary-800 py-6 px-6 md:px-10 mb-24">
      {/* Image Section */}
      <div className="relative w-full h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
        <Image
          className="object-cover"
          fill
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0">
        <h1 className="text-accent-100 font-black text-4xl md:text-5xl lg:text-7xl mb-5 md:translate-x-[-20px] bg-primary-950 p-6 pb-1 w-[150%] md:w-[100%] rounded-lg shadow-md">
          Cabin {name}
        </h1>
        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

 
        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
