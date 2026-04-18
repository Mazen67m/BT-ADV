import { TeamPage } from "@/components/admin/team/TeamPage";
import { getTeam } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function TeamRoute() {
  const team = await getTeam(false); // Get all members, not just featured
  return <TeamPage initialMembers={team} />;
}
