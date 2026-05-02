-- ─────────────────────────────────────────────────────────────────────────────
-- Drop the hardcoded category CHECK constraint from the pricing table.
-- This allows admins to create, rename, and delete pricing categories freely
-- through the admin dashboard without being restricted to the original 4 values.
--
-- Run this in: Supabase Dashboard → SQL Editor
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE pricing DROP CONSTRAINT IF EXISTS pricing_category_check;
