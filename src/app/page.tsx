import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/proposal.JPG")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-8 sm:pt-16 md:pt-24">
          <h1 className="heading text-3xl sm:text-4xl md:text-6xl font-normal text-white text-center mb-4 sm:mb-6">
            Welcome to Our Wedding
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mx-auto">
            Join us as we celebrate our love and begin our journey together
          </p>
        </div>
      </div>
    </main>
  );
}
