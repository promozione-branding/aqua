import React from "react";
import { redirect } from "next/navigation";
import Location from "./Location";

const cities = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Manesar",
  "Sonipat",
  "Panipat",
  "Rohtak",
  "Rewari",
  "Bawal",
  "Dharuhera",
  "Bahadurgarh",
  "Karnal",
  "Hisar",
  "Ambala",
  "Palwal",
  "Meerut",
  "Hapur",
  "Muzaffarnagar",
  "Aligarh",
  "Bulandshahr",
  "Agra",
  "Mathura",
  "Moradabad",
  "Saharanpur",
  "Bareilly",
  "Firozabad",
  "Alwar",
  "Bhiwadi",
  "Neemrana",
  "Behror",
  "Jaipur",
  "Bharatpur",
  "Dausa",
  "Sikar",
  "Jhunjhunu",
  "Kotputli",
  "Ajmer",
  "Kota",
  "Bhilwara",
  "Udaipur",
  "Chittorgarh",
  "Haridwar",
  "Roorkee",
  "Dehradun",
  "Chandigarh",
  "Ludhiana",
  "Jaipur",
];

export default async function Page({ params }) {
  const { location } = await params;

  // water-purifier-in-delhi → delhi
  const citySlug = location.replace("water-purifier-in-", "");

  // delhi → Delhi
  const city = citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  // Check city
  const isValidCity = cities.some(
    (item) => item.toLowerCase() === city.toLowerCase(),
  );

  // Redirect invalid city to homepage
  if (!isValidCity) {
    redirect("/");
  }

  // Use the exact city name from the array
  const validCity = cities.find(
    (item) => item.toLowerCase() === city.toLowerCase(),
  );

  return (
    <>
      <Location city={validCity} />
    </>
  );
}
