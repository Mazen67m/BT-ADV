import { BTSPage } from "@/components/admin/bts/BTSPage";
import { getBts } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function BTSRoute() {
  const initialBts = await getBts();
  
  return <BTSPage initialBts={initialBts} />;
}
