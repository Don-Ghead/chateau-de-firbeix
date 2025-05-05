import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
        subject: z.string().min(1, 'Subject is required'),
        message: z.string().min(1, 'Message is required'),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const data = await resend.emails.send({
          from: 'Chateau de Firbeix <onboarding@resend.dev>',
          to: 'luketparsons@gmail.com',
          replyTo: input.email,
          subject: `Contact Form: ${input.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Subject:</strong> ${input.subject}</p>
            <h3>Message:</h3>
            <p>${input.message.replace(/\n/g, '<br>')}</p>
          `,
        })

        return { success: true, data }
      } catch (error) {
        console.error('Error sending email:', error)
        throw new Error('Failed to send email')
      }
    }),
}) 