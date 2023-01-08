export const buttonSizes = {
  sm: '1.1rem',
  md: '1.4rem',
  lg: '1.9rem',
  xl: '2.5rem',
} as const

export type TButtonSizes = typeof buttonSizes[keyof typeof buttonSizes]

const sharedButtonValues = {
  buttonSizes,
}

export default sharedButtonValues
