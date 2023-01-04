import Link from 'next/link'

export interface IBlog {
  title: string
  content: string
  id: string
}

interface IBlogSummaryProps {
  blog: IBlog
}

const BlogSummary = ({ blog }: IBlogSummaryProps) => {
  const { title, content, id } = blog
  return (
    <article className='rounded-md bg-slate-500 p-3 text-slate-200'>
      <h2 className='pb-2 text-3xl'>
        <Link href={`blog/${encodeURIComponent(id)}/detailed`}>{title}</Link>
      </h2>
      <p>{content}</p>
    </article>
  )
}

export default BlogSummary
