import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./proposal.JPG')" }}
      >
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-8 sm:pt-16 md:pt-24">
          <h1 className="heading mb-4 text-center text-3xl font-normal text-white sm:mb-6 sm:text-4xl md:text-6xl">
            JP and Jessica
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-white sm:text-xl md:text-2xl">
            Sunday October 12, 2025
          </p>
        </div>
      </div>
    </main>
  );
}
