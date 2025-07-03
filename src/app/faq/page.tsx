import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="heading mb-8 text-center text-3xl font-normal text-gray-800 sm:mb-12 sm:text-4xl">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Can I bring a guest?</h3>
                <p className="mb-2 text-gray-600">
                  We are only able to accommodate those listed on your invitation. If your
                  invitation says &quot;and Guest,&quot; then yes.
                </p>
                <p className="text-gray-600">
                  While we would love to accommodate a plus-one for every guest, we are limited by
                  space. The name of every guest invited to attend will be clearly listed on your
                  invitation and RSVP form.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Are kids welcome?</h3>
                <p className="text-gray-600">
                  We love your kids, however, we ask that only those listed on your invitation
                  attend.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  What is the dress code?
                </h3>
                <p className="mb-2 text-gray-600">
                  Please wear semi-formal or cocktail attire. Our wedding ceremony will take place
                  during Mass in a Catholic Church. Cocktail hour will be outdoors and the reception
                  will be in a climate-controlled tent. Be ready to hit the dance floor!
                </p>
                <p className="text-gray-600">Be ready to hit the dance floor!</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  What time should I arrive at the church?
                </h3>
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
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Is there parking available at the church/venue?
                </h3>
                <p className="mb-2 text-gray-600">Yes, and yes.</p>
                <p className="mb-2 text-gray-600">
                  There is plenty of free street parking immediately around the church on N. Charles
                  Street, 28th Street, and 29th Street. We ask that you reserve parking directly in
                  front of the church for the bridal party, immediate family, and those needing to
                  access the wheelchair ramp. Additionally, the church has a parking lot located at
                  the corner of 28th Street and N Charles (enter on 28th Street).
                </p>
                <p className="text-gray-600">
                  Our reception venue also has plenty of parking available in their lot.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Are there hotel room blocks available for guests?
                </h3>
                <p className="mb-2 text-gray-600">
                  Yes. There is a hotel block at Fairfield Inn and Suites in White Marsh.
                </p>
                <p className="mb-2 text-gray-600">Address: 8477 Cordon Way, Baltimore, MD 21236</p>
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

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Will the event be indoors or outdoors?
                </h3>
                <p className="mb-2 text-gray-600">The Mass will be indoors in a church.</p>
                <p className="text-gray-600">
                  The cocktail hour will be outside at Mountain Branch Golf Club. The reception will
                  be in a climate-controlled tent.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Are the ceremony and reception locations wheelchair accessible?
                </h3>
                <p className="mb-2 text-gray-600">
                  Yes. Saints Philip and James Catholic Church has a wheelchair ramp located on the
                  left side of the entrance.
                </p>
                <p className="text-gray-600">
                  Mountain Branch Golf Club has a wheelchair accessible pathway to the reception
                  area as well as a wheelchair accessible restroom.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Will there be any vegan, vegetarian, gluten-free, or special diet options
                  available?
                </h3>
                <p className="text-gray-600">
                  Yes. Please note any dietary restrictions on your RSVP. We are only able to
                  accommodate dietary restrictions that are notified in advance.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  When is the RSVP deadline?
                </h3>
                <p className="text-gray-600">
                  Please RSVP online by <b>August 12, 2025.</b>
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  How can I participate in the Mass/wedding ceremony if I&apos;m not Catholic?
                </h3>
                <p className="text-gray-600">
                  Please join us in the responses and songs during the Mass. We will provide
                  detailed programs so that everyone can participate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
