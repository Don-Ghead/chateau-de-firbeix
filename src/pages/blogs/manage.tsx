import useIsAdmin from '../../utils/auth/useIsAdmin'
import { NextPage } from 'next'
import { trpc } from '../../utils/trpc'
import EditableBlogSummary from '../../components/blog-summary/EditableBlogSummary'
import { useState } from 'react'

const Manage: NextPage = () => {
  const { data: blogs, isLoading, error } = trpc.useQuery(['blogs.getAll'])
  const isAdmin = useIsAdmin()

  if (isLoading) return <h2>Loading...</h2>

  // TODO - better error handling
  if (error) return <h2>Error Fetching blogs: {error.message}</h2>

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main className='flex flex-col items-center'>
      <h1 className='py-5 text-center text-3xl font-bold'>
        Edit Chateau de Firbeix Blogs
      </h1>
      <h3 className='text-bold pb-4 text-center text-2xl text-red-600'>
        Important! Saving changes will apply them to the live website
      </h3>
      <section
        aria-label='list of blogs about the Chateau'
        className='flex w-4/5 flex-col gap-3'
      >
        {blogs &&
          blogs.map(blog => (
            <EditableBlogSummary
              showEditButtons={isAdmin}
              key={blog.id}
              blog={blog}
            />
          ))}
      </section>
    </main>
  )
}

export default Manage