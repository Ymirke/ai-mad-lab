import { kv } from '@vercel/kv';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(req: Request) {
  const prev: number = await kv.get('click_count');

  const newNum = prev + 1;

  await kv.set('click_count', newNum);

  return Response.json({ data: newNum });
}
