"use server";

import {  signIn, signOut } from "./auth";


export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function updateGuestProfile(formData) {
  // 1) Authentication
  const session = (await auth()) ;
  // if (!session)

  // 2) Validation
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  }
