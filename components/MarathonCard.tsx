import { Marathon } from "@/types/marathon";

interface MarathonCardProps {
  marathon: Marathon;
}

export function MarathonCard({ marathon }: MarathonCardProps) {
  const marathonDate = new Date(marathon.date);
  const formattedDate = marathonDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {marathon.name}
      </h2>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Location:</span> {marathon.city}, {marathon.country}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Date:</span> {formattedDate}
        </p>
      </div>
      <a
        href={marathon.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`Visit official website for ${marathon.name}`}
      >
        Official Website
      </a>
    </article>
  );
}
