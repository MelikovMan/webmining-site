import type { Metadata } from 'next';
import Links from './links.mdx'

export const metadata: Metadata = {
  title: "Ссылки на источники",
  description: "Ссылки на источники в сети Интернет."
};
export default async function Page() {
  return (
    <article className='prose lg:prose-xl dark:prose-invert container mx-auto p-2'>
        <Links/>
    </article>
  )
}