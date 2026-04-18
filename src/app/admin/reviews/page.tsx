import { ReviewsPage } from "@/components/admin/reviews/ReviewsPage";
import { getClients, getAllReviews } from "@/lib/supabase/queries";

export const dynamic = 'force-dynamic';

export default async function ReviewsRoute() {
  const initialReviews = await getAllReviews();
  const clients = await getClients();
  
  return <ReviewsPage initialReviews={initialReviews} clients={clients} />;
}
