import { z } from 'zod'

const ZRoleEnums = z.enum(['USER', 'ADMIN'])
type TRoleEnums = z.infer<typeof ZRoleEnums>
