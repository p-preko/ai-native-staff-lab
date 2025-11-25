import { z } from 'zod';

// Helper for handling Next.js search params which can be string | string[]
const searchParam = z
  .union([z.string(), z.array(z.string())])
  .optional()
  .transform((val) => {
    if (Array.isArray(val)) return val[val.length - 1];
    return val;
  });

export const workspaceSearchParamsSchema = z.object({
  search: searchParam,
  status: searchParam,
});

export type WorkspaceSearchParams = z.infer<typeof workspaceSearchParamsSchema>;
