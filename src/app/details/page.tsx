import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function Details() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="heading mb-8 text-center text-3xl font-normal text-gray-800 sm:mb-12 sm:text-4xl">
            Wedding Details
          </h1>
          <p className="mb-4 text-center italic">Please note, timeline may change.</p>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Wedding Ceremony <span className="font-normal">– 1:30PM</span>
                </h3>
                <Link href={'https://maps.app.goo.gl/WaSHWK2HQHGPUD5h7'} target="_blank">
                  <p className="text-gray-600">Saints Phillip & James Catholic Church</p>
                  <p className="text-gray-600">2801 N Charles St, Baltimore, MD 21218</p>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Cocktail Hour <span className="font-normal">– 4:00PM</span>
                </h3>
                <Link href={'https://maps.app.goo.gl/ZdPXEJ5EUqhRWFmu7'} target="_blank">
                  <p className="text-gray-600">Mountain Branch Golf Club</p>
                  <p className="text-gray-600">1827 Mountain Rd, Joppa, MD 21085</p>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Reception <span className="font-normal">– 5:00PM</span>
                </h3>
                <Link href={'https://maps.app.goo.gl/ZdPXEJ5EUqhRWFmu7'} target="_blank">
                  <p className="text-gray-600">Mountain Branch Golf Club</p>
                  <p className="text-gray-600">1827 Mountain Rd, Joppa, MD 21085</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
