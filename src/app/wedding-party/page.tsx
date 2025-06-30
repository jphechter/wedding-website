import { Navbar } from '@/components/Navbar';

interface WeddingPartyMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const bridesmaids: WeddingPartyMember[] = [
  {
    name: 'Jane Doe',
    role: 'Maid of Honor',
    image: '/wedding-party/jane.jpg',
    description: 'Childhood friend and confidant who knows all the secrets.',
  },
  // Add more bridesmaids here
];

const groomsmen: WeddingPartyMember[] = [
  {
    name: 'John Smith',
    role: 'Best Man',
    image: '/wedding-party/john.jpg',
    description: 'College roommate and lifelong friend who has been there through thick and thin.',
  },
  // Add more groomsmen here
];

export default function WeddingParty() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="heading mb-12 text-center text-4xl md:text-5xl">Wedding Party</h1>

        <div className="flex flex-col gap-12 md:flex-row">
          {/* Bridesmaids Section */}
          <div className="flex-1">
            <h2 className="heading mb-8 text-center text-3xl">Bridesmaids</h2>
            <div className="space-y-6">
              {bridesmaids.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg md:flex-row"
                >
                  <div className="h-48 w-full md:h-32 md:w-32">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${member.image}')`,
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading text-xl">{member.name}</h3>
                    <p className="mb-2 font-medium text-gray-600">{member.role}</p>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groomsmen Section */}
          <div className="flex-1">
            <h2 className="heading mb-8 text-center text-3xl">Groomsmen</h2>
            <div className="space-y-6">
              {groomsmen.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg md:flex-row"
                >
                  <div className="h-48 w-full md:h-32 md:w-32">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${member.image}')`,
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading text-xl">{member.name}</h3>
                    <p className="mb-2 font-medium text-gray-600">{member.role}</p>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
