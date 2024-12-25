// import { notFound } from "next/navigation";
// import supabase from "./supabase";
// import { eachDayOfInterval } from "date-fns";

// /////////////
// // GET

// export async function getCabin(id) {
//   const { data, error } = await supabase
//     .from("cabins")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//     notFound();
//   }

//   return data;
// }

// export const getCabins = async function () {
//   const { data } = await supabase
//     .from("cabins")
//     .select(
//       "id ,name,regularPrice,discount ,image ,maxCapcity ,description  ,_id"
//     );

//   // if (error) {
//   //   console.error(error);
//   //   throw new Error("Cabins could not be loaded");
//   // }

//   return data;
// };
// export async function getGuest() {
//   const { data, error } = await supabase
//     .from("guests")
//     .select("*")
//     // .eq("email", email)
//     .single();

//   // No error here! We handle the possibility of no guest in the sign in callback
//   return data;
// }
// export async function createGuest(newGuest) {
//   const { data, error } = await supabase.from("guests").insert([newGuest]);
//   console.log("New guest: ", newGuest);

//   if (error) {
//     console.log(error);
//     // throw new Error("Guest could not be created");
//   }

//   return data;
// }
// export async function getCountries() {
//   try {
//     const res = await fetch(
//       "https://restcountries.com/v2/all?fields=name,flag"
//     );
//     const countries = await res.json();
//     return countries;
//   } catch {
//     throw new Error("Could not fetch countries");
//   }
// }
// export async function getBookedDatesByCabinId(cabinId) {
//   let today = new Date();
//   today.setUTCHours(0, 0, 0, 0);
//   today = today.toISOString();

//   // Getting all bookings
//   const { data, error } = await supabase
//     .from("bookings")
//     .select("*")
//     .eq("cabinId", cabinId)


//   if (error) {
//     console.log(error);
//   }

//   // Converting to actual dates to be displayed in the date picker
//   const bookedDates = data
//     .map((booking) => {
//       return eachDayOfInterval({
//         start: new Date(booking.startDate),
//         end: new Date(booking.endDate),
//       });
//     })
//     .flat();

//   return bookedDates;
// }
// export async function getSettings() {
//   const { data, error } = await supabase.from("settings").select("*").single();

//   if (error) {
//     console.error(error);
//     // throw new Error("Settings could not be loaded");
//   }

//   return data;
// }

// export async function getBookings() {
//   let { data, error } = await supabase
//   .from('bookings')
//   .select('*')

//   if (error) {
//     console.log(error);
//   }

//   return data;
// }
import { eachDayOfInterval } from "date-fns";
import  supabase  from "./supabase";
import { notFound } from "next/navigation";
import { auth } from "./auth";

/////////////
// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    notFound();
  }

  return data;
}

export async function getCabinPrice(
  id
){
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
  }

  return data;
}
export const getCabins = async function () {
  const { data } = await supabase
    .from("cabins")
    .select( "**" );


  return data;
};

//   const { data, error } = await supabase.from("cabins")
//     .select("id, name, maxCapacity, regularPrice, discount, image")
//     .order("name");

//   if (error) {
//     console.error(error);
//     throw new Error("Cabins could not be loaded");
//   }

//   return data;
// };

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

// export async function getBooking() {
//   const { data, error } = await supabase
//     .from("bookings")
//     .select("*")
//     .single();

//   if (error) {
//     console.log(error);

//   }

//   return data;
// }
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    // throw new Error("Booking could not get loaded");
  }

  return data;
}
export async function getBookings(
){
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .order("startDate")

  if (error) {
    console.log(error);

  }

  return data;
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


  if (error) {
    console.log(error);
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
export async function getSettings(){
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

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

// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.log(error);
    // throw new Error("Guest could not be created");
  }

  return data;
}

export async function handleAuht(bookingId) {
  const session = (await auth()) ;
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session?.user?.guestId);

  if (!guestBookings.some((booking) => booking.id === bookingId))
console.log(error);

}