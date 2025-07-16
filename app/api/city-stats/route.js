import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export async function GET() {
  const { data, error } = await supabase.from('cities').select('*');
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ cities: data });
}
