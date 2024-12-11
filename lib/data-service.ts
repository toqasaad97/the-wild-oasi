// import {  supabaseUrl } from "./supabase";
import supabase from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}


export async function getCabin(id: string) {
  const { data, error } = await supabase.from("cabins").select(( id))

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}