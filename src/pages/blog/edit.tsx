import useIsAdmin from '../../utils/auth/useIsAdmin'
import { NextPage } from 'next'
import BlogSummary from '../../components/blog-summary/BlogSummary'
import { trpc } from '../../utils/trpc'

const Edit: NextPage = () => {
  const { data: blogs, isLoading, error } = trpc.useQuery(['blog.getAll'])
  const isAdmin = useIsAdmin()

  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2>Error Fetching blogs: {error.message}</h2>

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main className='flex flex-col items-center'>
      <h1 className='py-5 text-center text-3xl font-bold'>
        Edit Chateau de Firbeix Blogs
      </h1>
      <h3 className='text-bold text-center text-2xl text-red-600'>
        Important! Saving changes will apply them to the live website
      </h3>
      <section
        aria-label='list of blogs about the Chateau'
        className='flex w-4/5 flex-col gap-3'
      >
        {blogs &&
          blogs.map(({ title, content, id }) => (
            <BlogSummary key={id} title={title} content={content} id={id} />
          ))}{' '}
      </section>
    </main>
  )
}

export default Edit
