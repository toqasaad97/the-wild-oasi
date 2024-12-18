"use client";

import { createContext, useContext, useState } from "react";

const initialState = { from: undefined, to: undefined };

interface range {
  from: any;
  to: any;
}

interface ContextProps {
  range: range;
  setRange: (range: any) => void;
  resetRange: () => void;
}

const ReservationContext = createContext<ContextProps>({
  range: initialState,
  setRange: (range: any) => {},
  resetRange: () => {},
});

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
