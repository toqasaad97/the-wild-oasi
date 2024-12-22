import { notFound } from "next/navigation";
import supabase from "./supabase";

/////////////
// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export const getCabins = async function () {
  const { data } = await supabase
    .from("cabins")
    .select(
      "id ,name,regularPrice,discount ,image ,maxCapcity ,description  ,_id"
    );

  // if (error) {
  //   console.error(error);
  //   throw new Error("Cabins could not be loaded");
  // }

  return data;
};
export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}
export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}
export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    // throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getGuest(email) {
  try {
    const { data, error } = await supabase
      .from("guest")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.log("Error", error);
    }

    return data;
  } catch (error) {
    console.error("Error fetching guest:", error);
    return null;
  }
}

export async function createGuest(newGuest) {
  try {
    const { data, error } = await supabase.from("guest").insert([newGuest]);

    if (error) {
      console.error("Error  guest:", error);
    }

    return data;
  } catch (error) {
    console.error("Error creating guest:", error);
    return null; //
  }
}
