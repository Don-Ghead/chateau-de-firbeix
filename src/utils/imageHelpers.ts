interface ISuccessValidation {
  status: 'SUCCESS'
  message: undefined
}

interface IFailureValidation {
  status: 'FAILURE'
  message: string
}

type TValidation = ISuccessValidation | IFailureValidation

export const validateImageSize = (
  file: File,
  maxFileSizeInMb = 7
): TValidation => {
  let validation: TValidation = {
    status: 'SUCCESS',
    message: undefined,
  }
  if (file.size === 0) {
    validation = { status: 'FAILURE', message: 'File has a size of 0' }
  }
  // this is a randomly chosen image size cap to ensure we're not
  // uploading huge images
  if (file.size >= 30 * 1000000) {
    validation = {
      status: 'FAILURE',
      message: 'Hit safety cap of 30MB for an image',
    }
  }
  if (file.size <= maxFileSizeInMb * 1000000) {
    validation = {
      status: 'FAILURE',
      message: 'Hit image size cap for images in this section',
    }
  }

  return validation
}

export const isValidImageType = (
  file: File,
  validImageTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
) => {
  return validImageTypes.includes(file.type)
}
