// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { protectedExampleRouter } from './protected-example-router'
import { contactRouter } from './contact'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('auth.', protectedExampleRouter)
  .merge('contact.', contactRouter)

// export type definition of API
export type AppRouter = typeof appRouter
