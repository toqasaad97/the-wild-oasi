import Image from 'next/image';
import Link from 'next/link';
import { UsersIcon } from '@heroicons/react/24/solid';

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className='flex flex-col md:flex-row border-primary-800 border mb-6'>
      <div className='flex-1 relative h-64 md:h-auto'>
        <Image
          src={image}
          layout="fill"
          alt={`Cabin ${name}`}
          className='object-cover border-b md:border-r border-primary-800'
        />
      </div>

      <div className='flex-grow p-5 bg-primary-950'>
        <h3 className='text-accent-500 font-semibold text-xl md:text-2xl mb-3'>
          Cabin {name}
        </h3>

        <div className='flex gap-3 items-center mb-2'>
          <UsersIcon className='h-5 w-5 text-primary-600' />
          <p className='text-lg text-primary-200'>
            For up to <span className='font-bold'>{maxCapacity}</span> guests
          </p>
        </div>

        <p className='flex gap-3 justify-end items-baseline'>
          {discount > 0 ? (
            <>
              <span className='text-2xl md:text-3xl font-[350]'>
                ${regularPrice - discount}
              </span>
              <span className='line-through font-semibold text-primary-600'>
                ${regularPrice}
              </span>
            </>
          ) : (
            <span className='text-2xl md:text-3xl font-[350]'>${regularPrice}</span>
          )}
          <span className='text-primary-200'>/ night</span>
        </p>

        <div className='mt-4 md:mt-6'>
          <Link
            href={`/cabins/${id}`}
            className='inline-block py-3 px-6 border-l border-primary-800 text-center hover:bg-accent-600 transition-all hover:text-primary-900'
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
