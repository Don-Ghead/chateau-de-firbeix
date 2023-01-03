import { z } from 'zod'

export const ZRoleEnums = z.enum(['USER', 'ADMIN'])
export type TRoleEnums = z.infer<typeof ZRoleEnums>
