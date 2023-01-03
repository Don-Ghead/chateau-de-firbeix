import Link from 'next/link'

export interface IBlogSummaryProps {
  title: string
  content: string
  id: string
}

const BlogSummary = ({ title, content, id }: IBlogSummaryProps) => {
  return (
    <article key={id} className='bg-slate-500'>
      <h2 className='text-3xl '>
        <Link href={`blog/${encodeURIComponent(id)}/detailed`}>{title}</Link>
      </h2>
      <p>{content}</p>
    </article>
  )
}

export default BlogSummary