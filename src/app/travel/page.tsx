import { Navbar } from '@/components/Navbar';

interface TravelSection {
  title: string;
  content: string;
}

const travelSections: TravelSection[] = [
  {
    title: 'Getting There',
    content:
      'The venue is located in [City, State]. The nearest major airport is [Airport Name], which is approximately [X] miles from the venue.',
  },
  {
    title: 'Accommodations',
    content:
      'We have reserved a block of rooms at [Hotel Name] at a special rate. Please mention our wedding when booking to receive the discounted rate. The hotel is located [X] minutes from the venue.',
  },
  {
    title: 'Transportation',
    content:
      'Shuttle service will be provided between the hotel and venue on the day of the wedding. The first shuttle will depart at [Time] and the last return shuttle will leave at [Time].',
  },
  {
    title: 'Local Attractions',
    content:
      "While you're in town, we recommend checking out [Local Attraction 1], [Local Attraction 2], and [Local Attraction 3].",
  },
];

export default function Travel() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="heading mb-12 text-center text-4xl md:text-5xl">Travel Information</h1>

        <div className="mx-auto max-w-3xl space-y-12">
          {travelSections.map((section, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="heading mb-4 text-2xl">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}

          <div className="mt-12 rounded-lg bg-gray-50 p-6">
            <h2 className="heading mb-4 text-2xl">Need Help?</h2>
            <p className="text-gray-700">
              If you have any questions about travel arrangements or need assistance planning your
              trip, please don&apos;t hesitate to contact us at [Contact Information].
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
