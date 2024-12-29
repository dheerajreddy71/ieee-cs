import type { Database } from '@/types/supabase';

type Member = Database['public']['Tables']['members']['Row'];

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {member.image_url && (
        <img
          src={member.image_url}
          alt={member.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-sm text-blue-600">{member.role}</p>
        {member.bio && (
          <p className="mt-2 text-gray-600">{member.bio}</p>
        )}
      </div>
    </div>
  );
}