import type { GetStaticProps, NextPage } from 'next'
import fs from 'fs/promises' // Use promises API for async/await
import path from 'path'
import ReactMarkdown from 'react-markdown'

interface ChangelogPageProps {
  changelogContent: string
}

const ChangelogPage: NextPage<ChangelogPageProps> = ({ changelogContent }) => {
  return (
    <main className='container mx-auto px-4 py-4'>
      <article className='prose-h2:text-1xl prose-h1:text-2xl prose-h3:w-fit prose-h3:bg-slate-200 prose-h3:px-2 prose-h4:font-semibold prose-ul:list-inside prose-ul:list-disc lg:prose-xl'>
        <ReactMarkdown>{changelogContent}</ReactMarkdown>
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps<ChangelogPageProps> = async () => {
  let changelogContent = ''
  try {
    // Construct the full path to CHANGELOG.md
    const filePath = path.join(process.cwd(), 'CHANGELOG.md')
    // Read the file content
    changelogContent = await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading CHANGELOG.md:', error)
    // Optionally return a specific message or just empty content if file not found
    changelogContent = '# Changelog not found'
  }

  return {
    props: {
      changelogContent,
    },
    // Optional: Re-generate the page periodically if needed,
    // otherwise it only updates on rebuild.
    // revalidate: 60 * 60, // Revalidate every hour
  }
}

export default ChangelogPage
