
import PortfolioHeader from '../../components/porfolio-header'
import { type PortfolioHeaderProps } from '../../components/porfolio-header'
import Resume from '../components/resume'
import Auto from '../../../autobiography/auto_en.mdx'

export default async function Page() {
  let header_prop:PortfolioHeaderProps={
    name:'Melikov Roman Magomedovich',
    faculty:"Faculty of computer technology and applied mathematics",
    specialty:"Department of Computer Technology",
    eng:true,
    thesis:"Modern wiki-site development",
    advisor:"Lukaschik Elena Petrovna"

  }
  return (
  <div className='flex-auto flex-col min-w-fit'>
      <PortfolioHeader {...header_prop} />
      <Resume/>
      <div className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4`}>
      <Auto/>
      </div>
  </div>
  )
}
