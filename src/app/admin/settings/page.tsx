import { SettingsPage } from "@/components/admin/settings/SettingsPage";
import { getSiteSettings } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function SettingsRoute() {
  const settings = await getSiteSettings();
  return <SettingsPage initialSettings={settings} />;
}
