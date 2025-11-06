"use client";

import { useState, useMemo } from "react";
import { Marathon } from "@/types/marathon";
import { MarathonCard } from "./MarathonCard";
import { LocationFilters } from "./LocationFilters";
import { getUniqueCountries, getUniqueCities, filterMarathonsByLocation } from "@/lib/filters";

interface MarathonListProps {
  marathons: Marathon[];
}

export function MarathonList({ marathons }: MarathonListProps) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Extract unique countries and cities from all marathons
  const countries = useMemo(() => getUniqueCountries(marathons), [marathons]);
  const cities = useMemo(() => getUniqueCities(marathons), [marathons]);

  // Filter marathons based on selected country and city
  const filteredMarathons = useMemo(
    () => filterMarathonsByLocation(marathons, selectedCountry, selectedCity),
    [marathons, selectedCountry, selectedCity]
  );

  return (
    <>
      <LocationFilters
        countries={countries}
        cities={cities}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
        onCountryChange={setSelectedCountry}
        onCityChange={setSelectedCity}
      />

      {filteredMarathons.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No marathons found matching your filters. Try adjusting your selection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarathons.map((marathon) => (
            <MarathonCard key={marathon.id} marathon={marathon} />
          ))}
        </div>
      )}
    </>
  );
}
