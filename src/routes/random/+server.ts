import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
  return new Response(String(Math.random()));
}) satisfies RequestHandler;