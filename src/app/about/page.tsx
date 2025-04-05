import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="heading text-3xl sm:text-4xl font-normal text-center mb-8 sm:mb-12 text-gray-800">
            Our Story
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/jess_jp.jpg`}
                  alt="Jess and JP"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began in the most unexpected way. What started as a chance meeting 
                quickly blossomed into a beautiful friendship, and before we knew it, we were 
                inseparable. Through life&apos;s ups and downs, we&apos;ve grown together, supporting 
                each other through every challenge and celebrating every triumph.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our love story is built on shared adventures, late-night conversations, and 
                countless moments of laughter. We&apos;ve created memories that will last a lifetime, 
                from spontaneous road trips to quiet evenings at home. Every day with each other 
                is a new chapter in our story, and we can&apos;t wait to write the next one together.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As we prepare to say &apos;I do,&apos; we&apos;re filled with gratitude for the love and 
                support of our family and friends. Your presence in our lives has made our 
                journey even more special, and we&apos;re excited to celebrate this next chapter 
                with all of you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 