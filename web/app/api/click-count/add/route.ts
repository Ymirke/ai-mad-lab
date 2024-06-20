import { kv } from '@vercel/kv';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(req: Request) {
  const prev = await kv.get('click_count');

  return Response.json({ data: prev });
}
