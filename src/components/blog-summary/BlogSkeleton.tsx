const BlogSkeleton = () => {
  return (
    <article className='mx-10 mt-5 flex flex-col gap-2 rounded-md bg-slate-100 p-8 shadow-md'>
      <div className='flex animate-pulse space-x-4'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-8 rounded bg-slate-200'></div>
          <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-2 h-3 rounded bg-slate-200'></div>
            <div className='col-span-1 h-3 rounded bg-slate-200'></div>
            <div className='col-span-1 h-3 rounded bg-slate-200'></div>
            <div className='col-span-2 h-3 rounded bg-slate-200'></div>
            <div className='col-span-2 h-3 rounded bg-slate-200'></div>
            <div className='col-span-1 h-3 rounded bg-slate-200'></div>
            <div className='col-span-2 h-3 rounded bg-slate-200'></div>
            <div className='col-span-1 h-3 rounded bg-slate-200'></div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogSkeleton
