import { getUpcomingMarathonsSorted } from "@/lib/marathons";
import { MarathonCard } from "@/components/MarathonCard";

export default function Home() {
  const marathons = getUpcomingMarathonsSorted();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Marathon Finder
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover upcoming major marathons around the world
          </p>
        </header>

        {marathons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No upcoming marathons found. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marathons.map((marathon) => (
              <MarathonCard key={marathon.id} marathon={marathon} />
            ))}
          </div>
        )}

        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Find your next running challenge</p>
        </footer>
      </div>
    </main>
  );
}
