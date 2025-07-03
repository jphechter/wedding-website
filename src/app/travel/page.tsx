import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function Travel() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="heading mb-8 text-center text-3xl font-normal text-gray-800 sm:mb-12 sm:text-4xl">
            Travel Information
          </h1>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Day of Travel</h3>
                <p className="mb-2 text-gray-600">
                  We encourage you to arrive at the church between 1:00pm and 1:15pm to ensure you
                  have plenty of time to find parking and a seat before the Mass begins.
                </p>
                <p className="text-gray-600">
                  <i>
                    <b>Please note:</b> There is a Ravens football game starting at 1:00PM. Expect
                    delays on 95N, MLK Boulevard, and near the Baltimore tunnel.
                  </i>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Airport</h3>
                <p className="mb-2 text-gray-600">
                  The closest airport is Baltimore-Washington International (BWI)
                </p>
                <p className="text-gray-600">7050 Friendship Rd, Baltimore, MD 21240</p>
                <p className="text-gray-600">
                  BWI is approximately 30 minutes from the hotel block. The hotel is accessible from
                  BWI via taxi or ride share (such as Uber or Lyft).
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Hotel</h3>
                <p className="mb-2 text-gray-600">
                  There is a hotel block available at Fairfield Inn & Suites in White Marsh.
                  Address: 8477 Cordon Way, Baltimore, MD 21236
                </p>
                <p className="mb-2 text-gray-600">8477 Cordon Way, Baltimore, MD 21236</p>
                <p className="text-gray-600">
                  Use{' '}
                  <Link
                    href={
                      'https://urldefense.com/v3/__https:/www.marriott.com/event-reservations/reservation-link.mi?id=1746584839860&key=CORP&guestreslink2=true&app=resvlink__;!!FOfmI8qiWcWBHqypJtzENF0!3sAY09e9z7QIdyhWoDUkyEG_4xn4LVx0_bA2QFYeMeIgjnA4FEdbF0velSLY4Q0pXOE2qnQmrhL8pyfH5VeAnf8xlxoSFdjhqg$'
                    }
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    this link
                  </Link>{' '}
                  to book a room in the block with a discount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
