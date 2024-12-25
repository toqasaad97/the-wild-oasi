import SubmitButton from "../../../../../components/SubmitButton"
import { updateReservation } from "../../../../../lib/actions";

import { getBooking, getCabin } from "../../../../../lib/data-service"


export default async function Page({
  params,
}) {
  const { bookingId } = await  params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h1>

      <form
        action={updateReservation}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
            defaultValue={numGuests}
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: 6 }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
          <label htmlFor="hidden">
            <input
              type="hidden"
              name="bookingId"
              id="hidden"
              value={bookingId}
            />
          </label>
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating..." label="Update Reservation" />

        </div>
      </form>
    </div>
  );
}