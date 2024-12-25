"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = {
  from: null,
  to: null,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const handleRangeSelect = (selectedRange) => {
    if (selectedRange.from && selectedRange.to) {
      setRange(selectedRange);
    } else {
      setRange({ from: null, to: null });
    }
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, handleRangeSelect }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

export { useReservation, ReservationProvider };
