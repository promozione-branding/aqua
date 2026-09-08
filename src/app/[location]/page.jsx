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
];

// Get city from slug
function getCityFromSlug(location) {
  const citySlug = location.replace("water-purifier-in-", "");

  return citySlug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { location } = await params;

  const city = getCityFromSlug(location);

  const validCity = cities.find(
    (item) => item.toLowerCase() === city.toLowerCase()
  );

  if (!validCity) {
    return {
      title: "Water Purifier Manufacturer & Supplier",
      description:
        "Explore high-quality water purifiers, RO systems and water purification solutions.",
    };
  }

  return {
    title: `Water Purifier Manufacturer in ${validCity} | RO Systems`,
    description: `Looking for a trusted water purifier manufacturer in ${validCity}? Explore quality RO water purifiers, RO systems, spare parts and water purification solutions at competitive prices.`,
  };
}

export default async function Page({ params }) {
  const { location } = await params;

  // water-purifier-in-delhi → delhi
  const citySlug = location.replace("water-purifier-in-", "");

  // delhi → Delhi
  const city = citySlug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  // Check city
  const isValidCity = cities.some(
    (item) => item.toLowerCase() === city.toLowerCase()
  );

  // Redirect invalid city
  if (!isValidCity) {
    redirect("/");
  }

  // Get exact city name
  const validCity = cities.find(
    (item) => item.toLowerCase() === city.toLowerCase()
  );

  return (
    <>
      <Location city={validCity} />
    </>
  );
}