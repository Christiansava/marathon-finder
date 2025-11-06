import { Marathon } from "@/types/marathon";
import marathonsData from "@/data/marathons.json";

/**
 * Fetches all marathons from the data source.
 * Currently reads from local JSON file.
 * Can be easily swapped to fetch from an API later.
 */
export function getMarathons(): Marathon[] {
  return marathonsData as Marathon[];
}

/**
 * Filters marathons to only include upcoming events (future dates).
 * @param marathons - Array of marathon objects
 * @returns Filtered array of upcoming marathons
 */
export function getUpcomingMarathons(marathons: Marathon[]): Marathon[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return marathons.filter((marathon) => {
    const marathonDate = new Date(marathon.date);
    return marathonDate >= today;
  });
}

/**
 * Sorts marathons by date in ascending order (earliest first).
 * @param marathons - Array of marathon objects
 * @returns Sorted array of marathons
 */
export function sortMarathonsByDate(marathons: Marathon[]): Marathon[] {
  return [...marathons].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

/**
 * Gets upcoming marathons sorted by date.
 * This is the main function to use for displaying marathons on the homepage.
 * @returns Sorted array of upcoming marathons
 */
export function getUpcomingMarathonsSorted(): Marathon[] {
  const allMarathons = getMarathons();
  const upcoming = getUpcomingMarathons(allMarathons);
  return sortMarathonsByDate(upcoming);
}
