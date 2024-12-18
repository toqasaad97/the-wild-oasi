"use client";
import { useState } from "react";
import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector() {

  const regularPrice = 23;
  const discount = 5;
  const numNights = 5;
  const cabinPrice = numNights * (regularPrice - discount);


  const [selected, setSelected] = useState(null);
  const [range, setRange] = useState({ from: null, to: null });

  const minBookingLength = 1;
  const maxBookingLength = 23;


  const handleRangeSelect = (selectedRange) => {
    if (selectedRange.from && selectedRange.to) {
      setRange(selectedRange);
    } else {
      setRange({ from: null, to: null });
    }
  };

  const resetRange = () => {
    setRange({ from: null, to: null });
  };

  const totalPrice = range.from && range.to ? (range.to - range.from) / (1000 * 60 * 60 * 24) * (regularPrice - discount) : cabinPrice;

  return (
    <div className="flex flex-col justify-between">


      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={range}
        onSelect={handleRangeSelect}
        min={minBookingLength}
        max={maxBookingLength}
        fromMonth={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
      />


      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>


        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
