interface FeaturedEventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export function FeaturedEventCard({ title, date, description, image }: FeaturedEventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}