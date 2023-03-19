// TODO File validation schema

// const ZodImage = z.object({
//   profileImage: z
//       .custom<File>()
//       .refine((files) => files?.length == 1, "Image is required.")
//       .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//       .refine(
//           (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//           ".jpg, .jpeg, .png and .webp files are accepted."
//       ),
// });

export const ZodImage = {}
