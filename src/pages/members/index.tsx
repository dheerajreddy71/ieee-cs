import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MemberCard } from '@/components/members/member-card';
import type { Database } from '@/types/supabase';

type Member = Database['public']['Tables']['members']['Row'];

export function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('role');

      if (error) {
        console.error('Error fetching members:', error);
        return;
      }

      setMembers(data);
      setLoading(false);
    }

    fetchMembers();
  }, []);

  if (loading) {
    return <div>Loading members...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Our Team</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}