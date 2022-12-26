import { NextPage } from 'next'
import { trpc } from '../../utils/trpc'
import { BlogSummary } from '../../components/blog-summary/BlogSummary'
import Link from 'next/link'

const Blog: NextPage = () => {
  const { data: blogs, isLoading, error } = trpc.useQuery(['blog.getAll'])

  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2>Error Occurred</h2>

  return (
    <main className='flex flex-col items-center'>
      <h1 className='py-5 text-center font-title text-5xl'>
        Chateau de Firbeix Blogs
      </h1>
      {
        <section aria-label='admin controls'>
          <button>
            <Link href={`blog/create`}>Create</Link>
          </button>
        </section>
      }
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

export default Blog
