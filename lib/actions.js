// "use server";

// import { revalidatePath } from "next/cache";
// import { auth, signIn, signOut } from "./auth";
// import supabase  from "./supabase";

// import { redirect } from "next/navigation";


// export async function signInAction() {
//   await signIn("google", { redirectTo: "/account" });
// }

// export async function signOutAction() {
//   await signOut({ redirectTo: "/" });
// }
// export async function updateGuestProfile(formData) {
//   // 1) Authentication
//   const session = (await auth()) ;
//   // if (!session)

//   // 2) Validation
//   const nationalID = formData.get("nationalID");
//   const [nationality, countryFlag] = formData.get("nationality").split("%");

//   if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
//     throw new Error("Please provide a valid national ID");
//   revalidatePath("/account/profile")

//   }

// // export async function createBooking(bookingData, formData, session) {
// //   if (!formData || typeof formData.get !== 'function') {
// //     console.error('formData is not available or does not have a get method');
// //     return;
// //   }
// //   const guestId = session?.user?.guestId || null;
// //   const numGuests = formData.get("numGuests") ? Number(formData.get("numGuests")) : 0;
// //   const observations = formData.get("observations") ? formData.get("observations").slice(0, 1000) : '';

// //   const booking = {
// //     ...bookingData,
// //     guestId,
// //     numGuests,
// //     observations,
// //     extrasPrice: 0,
// //     totalPrice: bookingData.cabinPrice,
// //   };
// //   const { data } = await supabase.from("bookings").insert([newBooking]);``
// //     revalidatePath(`/cabins/${bookingData.cabinId}`);
// //     redirect("/cabins/thankyou");
// // }

// // lib/actions.js
// // export async function createBooking(bookingData, formData, session) {
// //   if (!formData || typeof formData.get !== 'function') {
// //     console.error('formData is not available or does not have a get method');
// //     return;
// //   }

// //   const guestId = session?.user?.guestId || null;
// //   const numGuests = formData.get("numGuests") ? Number(formData.get("numGuests")) : 0;
// //   const observations = formData.get("observations") ? formData.get("observations").slice(0, 1000) : '';

// //   const booking = {
// //     ...bookingData,
// //     guestId,
// //     numGuests,
// //     observations,
// //     extrasPrice: 0,
// //     totalPrice: bookingData.cabinPrice,
// //   };

// //   try {
// //     const { data, error } = await supabase.from("bookings").insert([booking]);

// //     if (error) {
// //       console.error('Error creating booking:', error);
// //       return;
// //     }

// //     // Revalidate the cabin path and redirect to the "thank you" page
// //     revalidatePath(`/cabins/${bookingData.cabinId}`);
// //     redirect("/cabins/thankyou");
// //   } catch (error) {
// //     console.error('Unexpected error:', error);
// //   }
// // }
// // export async function createBooking(bookingData, formData, session) {
// //   if (!formData || typeof formData.get !== 'function') {
// //     console.error('formData is not available or does not have a get method');
// //     return;
// //   }

// //   const guestId = session?.user?.guestId || null;
// //   const numGuests = formData.get("numGuests") ? Number(formData.get("numGuests")) : 0;
// //   const observations = formData.get("observations") ? formData.get("observations").slice(0, 1000) : '';

// //   const booking = {
// //     ...bookingData,
// //     guestId,
// //     numGuests,
// //     observations,
// //     extrasPrice: 0,
// //     totalPrice: bookingData.cabinPrice,
// //   };

// //   console.log('Booking Data:', booking);

// //   try {
// //     const { data, error } = await supabase.from('bookings').insert([booking]);

// //     if (error) {
// //       console.error('Error inserting booking:', error);
// //     }

// //     console.log('Booking Created:', data);
// //     revalidatePath(`/cabins/${bookingData.cabinId}`);
// //     redirect("/cabins/thankyou");
// //   } catch (err) {
// //     console.error('Error in createBooking:', err);
// //   }
// // }

// export async function createBooking(newBooking) {
//   const { data, error } = await supabase
//     .from('bookings')
//     .insert([newBooking])
//     .single();  // Ensures only one row is returned

//   if (error) {
//     console.error('Error inserting booking:', error);  // Log error details
//     return null;  // Early exit on error
//   }

//   console.log('Booking data inserted successfully:', data);  // Log successful insertion

//   // Assuming formatServerBookingData is a valid function, and bookingData is meant to be data
//   const booking = formatServerBookingData(data);

//   // Assuming revalidatePath and redirect are part of your framework (e.g., Next.js)
//   revalidatePath(`/cabins/${booking.cabinId}`);  // Ensure you're using the correct object for cabinId
//   redirect("/cabins/thankyou");

//   return booking;
// }

// export async function deleteReservation(bookingId) {
//   // 1) Authentication & Authorization
//   await auth(bookingId);

//   // 2) Mutation
//   const { error } = await supabase
//     .from("bookings")
//     .delete()
//     .eq("id", bookingId);

//   // 3) Error handling
//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not be deleted");
//   }

//   // 4) Revalidation
//   revalidatePath("/account/reservations");
// }

// export async function updateReservation(formData) {
//   const bookingId = Number(formData.get("bookingId"));

//   // 1) Authentication & Authorization
//   await auth(bookingId);

//   // 2) Building update data
//   const updateData = {
//     numGuests: Number(formData.get("numGuests")),
//     observations: formData.get("observations").slice(0, 1000),
//   };

//   // 3) Mutation
//   const { error } = await supabase
//     .from("bookings")
//     .update(updateData)
//     .eq("id", bookingId)
//     .select()
//     .single();

//   // 4) Error handling
//   if (error) throw new Error("Booking could not be updated");

//   // 5) Revalidation
//   revalidatePath(`/account/reservations/edit/${bookingId}`);

//   // 6) Redirecting
//   redirect("/account/reservations");
// }
"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { handleAuht } from "./data-service";

import { redirect } from "next/navigation";
export async function updateGuestProfile(formData) {
  // 1) Authentication
  const session = (await auth())
  if (!session) throw new Error("You must be logged in");

  // 2) Validation
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  // 3) Mutation
  const updateData = { nationality, countryFlag, nationalID };

  // 4) Error handling
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session?.user?.guestId);

  if (error) throw new Error("Guest could not be updated");

  // 5) Revalidation
  revalidatePath("/account/profile");
}

export async function createBooking(
  bookingData,
  formData
) {
  const session = (await auth()) ;
  if (!session) throw new Error("You must be logged in");

  if (!bookingData.startDate || !bookingData.endDate) {
    throw new Error("Please provide a valid date range");
  }

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  // if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteReservation(bookingId) {
  // 1) Authentication & Authorization
  await handleAuht(bookingId);

  // 2) Mutation
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  // 3) Error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  // 4) Revalidation
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1) Authentication & Authorization
  await handleAuht(bookingId);

  // 2) Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 3) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();



  // 5) Revalidation
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // 6) Redirecting
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}