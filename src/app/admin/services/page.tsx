import { ServicesPage } from "@/components/admin/services/ServicesPage";
import { getServices } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function ServicesRoute() {
  const services = await getServices();
  return <ServicesPage initialServices={services} />;
}
