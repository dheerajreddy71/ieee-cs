import { formatDate } from '@/lib/utils';
import type { Database } from '@/types/supabase';

type Event = Database['public']['Tables']['events']['Row'];

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {event.image_url && (
        <img
          src={event.image_url}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{event.title}</h3>
        <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
        <p className="mt-2 text-gray-600">{event.description}</p>
        <p className="mt-2 text-sm text-gray-500">{event.location}</p>
      </div>
    </div>
  );
}