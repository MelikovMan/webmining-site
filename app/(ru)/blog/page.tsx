import { BlogPosts } from 'app/components/posts'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Статьи индивидуального раздела</h1>
      <BlogPosts />
    </section>
  )
}
