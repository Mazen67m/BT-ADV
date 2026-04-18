import { CareersPage } from "@/components/admin/careers/CareersPage";
import { getAllCareers } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function CareersRoute() {
  const careers = await getAllCareers();
  return <CareersPage initialCareers={careers} />;
}
