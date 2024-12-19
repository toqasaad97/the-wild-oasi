"use client"
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext()

const initalState={
  from :undefined , to: undefined
}
function  ReservationProvider({children}) {

const [range, setRange] = useState(initalState);
const handleRangeSelect = (selectedRange) => {
  // التحقق من وجود both from و to
  if (selectedRange.from && selectedRange.to) {
    setRange(selectedRange);
  } else {
    setRange({ from: null, to: null });
  }
};
return <ReservationContext.Provider value={{range , setRange ,handleRangeSelect}}>
{children}
</ReservationContext.Provider>

}
 function useReservation() {
  const context =useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;

 }
 export {useReservation ,ReservationProvider}
