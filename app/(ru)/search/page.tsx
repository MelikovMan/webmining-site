import { Metadata } from 'next/types'
import Search from './search.mdx'


export const metadata: Metadata = {
  title: 'Поисковые системы',
  description: 'Результаты поиска релевантной информации в поисковых системах по магистерской диссертации.',

}
export default async function Page() {
  return (
    <article className='prose lg:prose-xl dark:prose-invert container mx-auto p-2'>
        <Search/>
    </article>
  )
}