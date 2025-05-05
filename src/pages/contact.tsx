import { NextPage } from 'next'
import { FaLanguage, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
import { ChangeEvent, FormEvent, useState } from 'react'
import { trpc } from '../utils/trpc'

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const sendMessage = trpc.useMutation('contact.sendContactForm', {
    onSuccess: () => {
      setFormData({ name: '', email: '', subject: '', message: '' })
    },
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    sendMessage.mutate(formData)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className='flex min-h-screen flex-col items-center bg-chateau-primary px-4 py-16'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='mb-12 text-center text-4xl font-bold text-chateau-secondary'>
          Contact Us
        </h1>

        <div className='grid gap-8 md:grid-cols-2'>
          {/* Contact Information and Map Card */}
          <div className='flex flex-col gap-6 rounded-lg bg-white p-8 shadow-lg'>
            <h2 className='text-2xl font-semibold text-chateau-secondary'>
              Get in Touch
            </h2>

            <div className='flex items-center gap-4'>
              <FaUser className='h-6 w-6 text-chateau-secondary' />
              <div>
                <h3 className='text-lg font-semibold text-chateau-secondary'>
                  Owners (Add picture of you two here)
                </h3>
                <p className='text-gray-600'>Tim & Caroline Parsons</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaPhone className='h-6 w-6 text-chateau-secondary' />
              <div>
                <h3 className='text-lg font-semibold text-chateau-secondary'>
                  Phone
                </h3>
                <a
                  href='tel:+33783186733'
                  className='text-gray-600 hover:text-chateau-secondary'
                >
                  +33 7 83 18 67 33
                </a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaLanguage className='h-6 w-6 text-chateau-secondary' />
              <div>
                <h3 className='text-lg font-semibold text-chateau-secondary'>
                  Languages
                </h3>
                <p className='text-gray-600'>English & French</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='h-6 w-6 text-chateau-secondary' />
              <div>
                <h3 className='text-lg font-semibold text-chateau-secondary'>
                  Address
                </h3>
                <p className='text-gray-600'>
                  235 All. des Cèdres
                  <br />
                  24450 Firbeix
                  <br />
                  France
                </p>
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='mb-4 text-lg font-semibold text-chateau-secondary'>
                Location
              </h3>
              <div className='w-full overflow-hidden rounded-lg'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.7283589265137!2d0.9719527527140873!3d45.60422795308838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fedf75c25c0bdf%3A0xe15c86a165bfe4ea!2sChateau%20de%20Firbeix!5e0!3m2!1sen!2suk!4v1746482866770!5m2!1sen!2suk'
                  width='100%'
                  height='300'
                  className='border-0'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className='rounded-lg bg-white p-8 shadow-lg'>
            <h2 className='mb-6 text-2xl font-semibold text-chateau-secondary'>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-1 block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-chateau-secondary focus:outline-none focus:ring-1 focus:ring-chateau-secondary'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-1 block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-chateau-secondary focus:outline-none focus:ring-1 focus:ring-chateau-secondary'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='mb-1 block text-sm font-medium text-gray-700'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-chateau-secondary focus:outline-none focus:ring-1 focus:ring-chateau-secondary'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-1 block text-sm font-medium text-gray-700'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-chateau-secondary focus:outline-none focus:ring-1 focus:ring-chateau-secondary'
                  required
                ></textarea>
              </div>

              {sendMessage.isError && (
                <p className='text-sm text-red-600'>
                  Failed to send message. Please try again.
                </p>
              )}

              {sendMessage.isSuccess && (
                <p className='text-sm text-green-600'>
                  {"Thank you for your message! We'll get back to you soon."}
                </p>
              )}

              <button
                type='submit'
                disabled={sendMessage.isLoading}
                className='mt-2 rounded-md bg-chateau-secondary px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-chateau-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              >
                {sendMessage.isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
