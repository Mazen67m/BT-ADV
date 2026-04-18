import { ClientsPage } from "@/components/admin/clients/ClientsPage";
import { getClients } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function ClientsRoute() {
  const initialClients = await getClients();
  
  return <ClientsPage initialClients={initialClients} />;
}
