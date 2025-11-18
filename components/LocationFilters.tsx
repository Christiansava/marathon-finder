"use client";

interface LocationFiltersProps {
  countries: string[];
  cities: string[];
  selectedCountry: string;
  selectedCity: string;
  onCountryChange: (country: string) => void;
  onCityChange: (city: string) => void;
}

export function LocationFilters({
  countries,
  cities,
  selectedCountry,
  selectedCity,
  onCountryChange,
  onCityChange,
}: LocationFiltersProps) {
  return (
    <div className="mb-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Filter by Location
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="country-filter"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Country
            </label>
            <select
              id="country-filter"
              value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter marathons by country"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="city-filter"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              City
            </label>
            <select
              id="city-filter"
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter marathons by city"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
