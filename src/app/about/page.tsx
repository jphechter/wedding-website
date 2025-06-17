import { Navbar } from '@/components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="heading mb-8 text-center text-3xl font-normal text-gray-800 sm:mb-12 sm:text-4xl">
            Our Story
          </h1>

          <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/jess_jp.jpg`}
                  alt="Jess and JP"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="w-full space-y-6 lg:w-1/2">
              <p className="text-lg leading-relaxed text-gray-700">
                JP and Jess are overjoyed and grateful to prepare for the beautiful sacrament of
                marriage and lifetime of adventures together.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                They met at a friend’s going away party in Baltimore. Funny enough, JP and Jess had
                many mutual friends from the Baltimore area, but had never met before. They spent
                the night talking about music, rock climbing, and other common interests.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                After exchanging phone numbers, Jess left for a summer full of trips around the
                world. In between all her trips, JP called Jess and asked her on a “good and proper
                date.” They had a picnic in a park with tacos and swing dancing, and the rest is
                history. From camping and ending up with a flooded tent to dancing in the kitchen
                while cooking dinner, JP and Jess are fond of encountering the sacredness in the
                ordinary of each and every day.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                JP proposed at the top of one of their favorite hikes: Old Rag in Shenandoah
                National Park, an easy 10-ish mile loop with some remnants of ice along the rock
                scrambles in February. They are excited to share many more adventures together, both
                big and small.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
