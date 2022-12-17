import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Detailed: NextPage = () => {
  const router = useRouter()
  const { blog_id } = router.query

  return <>Viewing detailed for {blog_id}</>
}

export default Detailed
