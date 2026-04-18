import { PricingPage } from "@/components/admin/pricing/PricingPage";
import { getAllPricing } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function PricingRoute() {
  const pricing = await getAllPricing();
  return <PricingPage initialPricing={pricing} />;
}
