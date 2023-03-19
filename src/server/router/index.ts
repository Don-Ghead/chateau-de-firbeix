// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { blogRouter } from './blogs'
import { protectedExampleRouter } from './protected-example-router'
import { imageRouter } from './images'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('blogs.', blogRouter)
  .merge('auth.', protectedExampleRouter)
  .merge('image.', imageRouter)

// export type definition of API
export type AppRouter = typeof appRouter
