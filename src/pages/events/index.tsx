import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { EventCard } from '@/components/events/event-card';
import type { Database } from '@/types/supabase';

type Event = Database['public']['Tables']['events']['Row'];

export function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
        return;
      }

      setEvents(data);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  const upcomingEvents = events.filter(event => !event.is_past);
  const pastEvents = events.filter(event => event.is_past);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}