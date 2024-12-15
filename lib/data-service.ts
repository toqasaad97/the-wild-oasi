
import { notFound } from "next/navigation";
import supabase from "./supabase";


/////////////
// GET

export async function getCabin(id){
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

export async function getCabinPrice(
  id: string
): Promise<{ regularPrice: number; discount: number }> {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  // if (error) {
  //   console.error(error);
  // }

  return data;
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("id ,name,regularPrice,discount ,image ,maxCapcity ,descripation  ,_id")
    .order("name");

  // if (error) {
  //   console.error(error);
  //   throw new Error("Cabins could not be loaded");
  // }

  return data;
};
