import { Navbar } from "@/components/Navbar";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading text-3xl sm:text-4xl font-normal text-center mb-8 sm:mb-12 text-gray-800">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  When and where is the wedding?
                </h3>
                <p className="text-gray-600">
                  [Date and location details will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What is the dress code?
                </h3>
                <p className="text-gray-600">
                  [Dress code information will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Are children welcome?
                </h3>
                <p className="text-gray-600">
                  [Information about children at the wedding will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What time should I arrive?
                </h3>
                <p className="text-gray-600">
                  [Arrival time information will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Where should I stay?
                </h3>
                <p className="text-gray-600">
                  [Accommodation information will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What&apos;s the best way to RSVP?
                </h3>
                <p className="text-gray-600">
                  [RSVP instructions will be added here]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Are there any dietary restrictions we should know about?
                </h3>
                <p className="text-gray-600">
                  [Dietary information will be added here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 