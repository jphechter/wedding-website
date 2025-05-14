import { Navbar } from '@/components/Navbar';

interface Activity {
  name: string;
  description: string;
  location: string;
  distance: string;
  link?: string;
}

interface ActivityCategory {
  title: string;
  description: string;
  activities: Activity[];
}

const activityCategories: ActivityCategory[] = [
  {
    title: 'Outdoor Activities',
    description: 'Enjoy the beautiful scenery and outdoor adventures',
    activities: [
      {
        name: '[Activity Name]',
        description: 'Description of the activity and what makes it special.',
        location: '[Location]',
        distance: '[Distance from venue]',
        link: '[Website URL]',
      },
      // Add more outdoor activities
    ],
  },
  {
    title: 'Restaurants & Dining',
    description: 'Local favorites and must-try eateries',
    activities: [
      {
        name: '[Restaurant Name]',
        description: "Cuisine type and what they're known for.",
        location: '[Location]',
        distance: '[Distance from venue]',
        link: '[Website URL]',
      },
      // Add more restaurants
    ],
  },
  {
    title: 'Shopping & Entertainment',
    description: 'Places to shop and things to do',
    activities: [
      {
        name: '[Place Name]',
        description: 'What to expect and what makes it worth visiting.',
        location: '[Location]',
        distance: '[Distance from venue]',
        link: '[Website URL]',
      },
      // Add more shopping/entertainment options
    ],
  },
];

export default function ThingsToDo() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="heading mb-4 text-center text-4xl md:text-5xl">Things To Do</h1>
        <p className="mb-12 text-center text-lg text-gray-600">
          Discover the best local attractions and activities during your stay
        </p>

        <div className="mx-auto max-w-4xl space-y-16">
          {activityCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <h2 className="heading mb-2 text-3xl">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {category.activities.map((activity, activityIndex) => (
                  <div
                    key={activityIndex}
                    className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
                  >
                    <h3 className="heading mb-2 text-xl">{activity.name}</h3>
                    <p className="mb-4 text-gray-700">{activity.description}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-medium">Location:</span> {activity.location}
                      </p>
                      <p>
                        <span className="font-medium">Distance:</span> {activity.distance}
                      </p>
                      {activity.link && (
                        <a
                          href={activity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center">
            <h2 className="heading mb-4 text-2xl">Need Recommendations?</h2>
            <p className="text-gray-700">
              If you&apos;re looking for specific types of activities or have questions about the
              area, feel free to reach out to us at [Contact Information].
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
