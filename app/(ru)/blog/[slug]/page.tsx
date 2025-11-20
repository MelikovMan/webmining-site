import { formatDate, getBlogPosts } from 'app/(ru)/blog/utils'
import { Metadata, ResolvingMetadata } from 'next'
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string, metadata:Metadata, content:string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`../posts/${slug}.mdx`)
 
  return (
  <div className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4`}>
    <Post />
  </div>
  )
}
 
export async function generateStaticParams() {
  let allBlogs = await getBlogPosts()
  //return [{ slug: 'vim' }, { slug: 'static-typing' }, {slug: 'spaces-vs-tabs'}]
  return allBlogs;
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params}: Props, parent: ResolvingMetadata): Promise<Metadata> {
      // Fetch product data based on params.id
      const { slug } = await params
      let allBlogs = await getBlogPosts();
      let cur_blog = allBlogs.find((e)=>slug==e.slug)
      let {title, description} = await parent
      return cur_blog?.metadata || {title, description} 


    }
 
export const dynamicParams = false