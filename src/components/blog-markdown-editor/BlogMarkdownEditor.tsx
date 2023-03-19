import SimpleMdeReact from 'react-simplemde-editor'
import EasyMDE from 'easymde'
import { isValidImageType, validateImageSize } from '../../utils/imageHelpers'
import { trpc } from '../../utils/trpc'
import { v4 as uuidv4 } from 'uuid'
import { env } from '../../env/client.mjs'

interface IBlogMarkdownEditorProps {
  content: string
  onChange: (updatedContent: string) => void
  onError: (err: string) => void
}

export const BlogMarkdownEditor = ({
  content,
  onChange,
  onError,
}: IBlogMarkdownEditorProps) => {
  const uploadImage = trpc.useMutation(['image.addToS3Bucket'])

  const simpleMDEOptions: EasyMDE.Options = {
    showIcons: ['strikethrough'],
    uploadImage: true,
    imagePathAbsolute: true,
    imageUploadFunction: async (file, onSuccess, onError) => {
      const imageTypeValidation = isValidImageType(file)
      if (!imageTypeValidation) {
        onError('Accepted image types are PNG, JPEG/JPG, and GIF')
        return
      }
      const imgSizeErr = validateImageSize(file)
      if (imgSizeErr.status === 'FAILURE') {
        onError(imgSizeErr.message)
        return
      }
      const uuid = uuidv4()
      const results = await uploadImage.mutate(
        { file: file, objectKey: uuid },
        {
          onError: err => onError(err.message),
          onSuccess: resp =>
            onSuccess(
              `https://${env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${uuid}`
            ),
        }
      )
    },
  }

  return (
    <SimpleMdeReact
      value={content}
      placeholder={'Content...'}
      onChange={onChange}
      // options={simpleMDEOptions}
    />
  )
}
