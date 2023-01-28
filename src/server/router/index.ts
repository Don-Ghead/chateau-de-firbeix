// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { blogRouter } from './blogs'
import { protectedExampleRouter } from './protected-example-router'
import { Amplify } from 'aws-amplify'
import { env } from '../../env/server.mjs'

Amplify.configure({
  accessKeyId: env.AWS_AMPLIFY_ACCESS_KEY,
  secretAccessKey: env.AWS_AMPLIFY_SECRET,
  region: env.AWS_AMPLIFY_REGION,
})

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('blogs.', blogRouter)
  .merge('auth.', protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
