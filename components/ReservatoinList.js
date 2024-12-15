"use client";
import { deleteReservation } from "@/lib/actions";

import { Bookings } from "@/types";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservatoinList({ bookings }: { bookings: Bookings[] }) {
  const [optimisticBookings, setOptimisticBookings] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter((booking) => booking.id !== bookingId)
  );

  async function handleDelete(bookingId: number) {
    try {
      setOptimisticBookings(bookingId);
      await deleteReservation(bookingId);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservatoinList;
