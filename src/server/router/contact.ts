import { z } from 'zod'
import { createRouter } from './context'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const contactRouter = createRouter().mutation('sendContactForm', {
  input: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
  }),
  async resolve({ input }) {
    try {
      await resend.emails.send({
        from: 'Chateau de Firbeix <luketparsons@gmail.com>',
        to: 'luketparsons@gmail.com',
        replyTo: input.email,
        subject: `[Contact request]: ${input.subject}`,
        text: `
Name: ${input.name}
Email: ${input.email}
Subject: ${input.subject}

Message:
${input.message}
        `,
      })

      return { success: true }
    } catch (error) {
      console.error('Failed to send email:', error)
      throw new Error('Failed to send message')
    }
  },
})
