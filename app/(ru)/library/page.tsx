import type { Metadata } from 'next';
import Library from './library.mdx'

export const metadata: Metadata = {
  title:"Эл. библиотека",
  description:"Эл. библиотека с ссылками на ресурсы."
};
export default async function Page() {
  return (
    <section className='prose lg:prose-xl dark:prose-invert container mx-auto p-2'>
        <Library/>
    </section>
  )
}