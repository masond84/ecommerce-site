import { TeamMember } from '../components/about/TeamMember';

export const About = () => {
  const teamMembers = [
    {
      name: 'Name Here',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      description: 'Visionary leader with 15+ years in e-commerce',
    },
    {
      name: 'Name Here',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      description: 'Award-winning designer passionate about user experience',
    },
    {
      name: 'Name Here',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      description: 'Strategic thinker driving product innovation',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopHub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to revolutionize online shopping by providing a seamless,
          personalized experience for our customers.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, ShopHub began with a simple idea: make online shopping
              more personal and enjoyable. Today, we serve millions of customers
              worldwide, offering a curated selection of premium products.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, sustainability, and customer satisfaction
              drives everything we do. We work directly with manufacturers and
              artisans to bring you the best products at competitive prices.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600">
              We never compromise on quality, ensuring every product meets our high standards.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Committed to reducing our environmental impact through eco-friendly practices.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, with dedicated support every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};