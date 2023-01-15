import { NextPage } from 'next'
import { trpc } from '../../utils/trpc'
import useIsAdmin from '../../utils/auth/useIsAdmin'
import { useRouter } from 'next/router'
import EditableBlogSummary from '../../components/blog-summary/EditableBlogSummary'

const Blog: NextPage = () => {
  const { data: blogs, isLoading, error } = trpc.useQuery(['blogs.getAll'])
  const router = useRouter()
  const isAdmin = useIsAdmin()

  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2>Error Occurred</h2>

  return (
    <main className='flex flex-col items-center'>
      <h1 className='py-5 text-center font-title text-5xl'>
        Chateau de Firbeix Blogs
      </h1>
      {isAdmin && (
        <section
          aria-label='admin controls'
          className='flex flex-row gap-2 pb-2'
        >
          <button
            onClick={() => router.push('blogs/create')}
            className='rounded-lg bg-slate-100 px-3 py-1 text-xl text-slate-600 shadow'
          >
            Create
          </button>
          <button
            onClick={() => router.push('blogs/manage')}
            className='rounded-lg bg-slate-100 px-3 py-1 text-xl text-slate-600 shadow'
          >
            Edit
          </button>
        </section>
      )}
      <section
        aria-label='list of blogs about the Chateau'
        className='flex w-4/5 flex-col gap-4'
      >
        {blogs &&
          blogs.map(blog => (
            <EditableBlogSummary
              key={blog.id}
              blog={blog}
              showEditButtons={false}
            />
          ))}
      </section>
    </main>
  )
}

export default Blog
