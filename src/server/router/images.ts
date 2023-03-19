import { createRouter } from './context'
import { z } from 'zod'
import { throwIfUserNotAdmin } from '../../utils/auth/validateUserPermissions'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { AwsCredentialIdentity } from '@aws-sdk/types'
import { env } from '../../env/server.mjs'

const CREDENTIALS: AwsCredentialIdentity = {
  secretAccessKey: env.AWS_SDK_SECRET,
  accessKeyId: env.AWS_SDK_ACCESS_KEY,
}

const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: CREDENTIALS,
})

export const imageRouter = createRouter().mutation('addToS3Bucket', {
  input: z.object({
    file: z.custom<File>(v => v instanceof File),
    objectKey: z.string(),
  }),
  async resolve({ ctx, input }) {
    throwIfUserNotAdmin(ctx.session)
    const params = {
      Bucket: env.AWS_S3_BUCKET_NAME,
      Key: input.objectKey,
      Body: input.file,
      ACL: 'public-read',
    }
    const results = await s3Client.send(new PutObjectCommand(params))
    // TODO remove logs when done debugging
    console.log('Results from uploading image:')
    console.log({ results })
    return results
  },
})
