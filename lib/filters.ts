import { Marathon } from "@/types/marathon";

/**
 * Extracts unique countries from an array of marathons, sorted alphabetically.
 * @param marathons - Array of marathon objects
 * @returns Sorted array of unique country names
 */
export function getUniqueCountries(marathons: Marathon[]): string[] {
  const countries = marathons.map((marathon) => marathon.country);
  return [...new Set(countries)].sort();
}

/**
 * Extracts unique cities from an array of marathons, sorted alphabetically.
 * @param marathons - Array of marathon objects
 * @returns Sorted array of unique city names
 */
export function getUniqueCities(marathons: Marathon[]): string[] {
  const cities = marathons.map((marathon) => marathon.city);
  return [...new Set(cities)].sort();
}

/**
 * Filters marathons by country and/or city.
 * @param marathons - Array of marathon objects
 * @param country - Country to filter by (empty string for all)
 * @param city - City to filter by (empty string for all)
 * @returns Filtered array of marathons
 */
export function filterMarathonsByLocation(
  marathons: Marathon[],
  country: string,
  city: string
): Marathon[] {
  return marathons.filter((marathon) => {
    const matchesCountry = !country || marathon.country === country;
    const matchesCity = !city || marathon.city === city;
    return matchesCountry && matchesCity;
  });
}
