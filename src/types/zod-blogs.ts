import { z } from 'zod'

export const ZBlog = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string().url()),
})
