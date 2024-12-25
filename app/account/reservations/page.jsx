import ReservatoinList from "../../../components/ReservatoinList";
import { auth } from "../../../lib/auth";
import { getBookings } from "../../../lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session?.user?.guestId);
  console.log(bookings);

  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h1>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservatoinList bookings={bookings} />
      )}
    </div>
  );
}