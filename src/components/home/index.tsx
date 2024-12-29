import { FeaturedEventCard } from './featured-event-card';

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to KARE IEEE Computer Society
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering students through technology, innovation, and professional development
        </p>
      </section>

      {/* Featured Events */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeaturedEventCard
            title="Tech Workshop 2024"
            date="March 15, 2024"
            description="Join us for an intensive workshop on emerging technologies"
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
          />
          <FeaturedEventCard
            title="Coding Competition"
            date="March 20, 2024"
            description="Test your programming skills in our annual coding competition"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500"
          />
          <FeaturedEventCard
            title="Industry Talk"
            date="March 25, 2024"
            description="Learn from industry experts about career opportunities"
            image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=500"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <div className="prose max-w-none">
          <p>
            The IEEE Computer Society Student Branch at KARE is dedicated to advancing technology
            and fostering professional growth among students. We organize workshops, seminars,
            and technical events to help students stay updated with the latest developments
            in computer science and engineering.
          </p>
        </div>
      </section>
    </div>
  );
}