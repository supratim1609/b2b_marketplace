-- ⚠️ DANGER: THIS WILL DELETE ALL USERS AND DATA ⚠️
-- Run this ONLY if you want to completely wipe all registered users and start fresh.

-- 1. Delete all users from Supabase Auth
-- This is the correct way to clean up.
-- Because of 'ON DELETE CASCADE', this will automatically wipe corresponding rows in public.profiles.
delete from auth.users;

-- 2. (Optional) Sanity check to make sure public.profiles is empty
delete from public.profiles; 

-- 3. Reset the ID sequence if you were using serial integers (not needed for UUIDs, but good practice for other tables)
-- Valid for 'profiles' only if it wasn't using UUIDs. Since we use UUIDs from auth.users, we don't need to reset sequences.

-- 4. Verify results
select count(*) as total_users from auth.users;
