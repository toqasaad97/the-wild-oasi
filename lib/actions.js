"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { handleAuth } from "./data-service";  // Fixing typo here

import { redirect } from "next/navigation";

export async function updateGuestProfile(formData) {
  // Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Validation
  const nationalID = formData.get("nationalID");
  const nationalityCountryFlag = formData.get("nationality");

  if (!nationalityCountryFlag) throw new Error("Nationality and country flag must be provided");
  const [nationality, countryFlag] = nationalityCountryFlag.split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  // Mutation
  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session?.user?.guestId);

  if (error) throw new Error("Guest could not be updated");

  // Revalidation
  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Validation
  if (!bookingData.startDate || !bookingData.endDate) {
    throw new Error("Please provide a valid date range");
  }

  const numGuests = Number(formData.get("numGuests"));
  if (isNaN(numGuests) || numGuests <= 0) {
    throw new Error("Please provide a valid number of guests");
  }

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests,
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  // Revalidation
  revalidatePath(`/cabins/${bookingData.cabinId}`);

  // Redirect after creating booking
  redirect("/cabins/thankyou");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
