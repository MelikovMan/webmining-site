
import PortfolioHeader from '../components/porfolio-header'
import { type PortfolioHeaderProps } from '../components/porfolio-header'
import { ShortNavbar } from '../components/short_navbar'
import Resume from '../components/resume'
import Auto from '../../autobiography/auto.mdx'

export default async function Page() {
  let header_prop:PortfolioHeaderProps={
    name:'Меликов Роман Магомедович',
    faculty:"Факультет компьютерных технологий и прикладной математики",
    specialty:"Кафедра информационных технологий",
    eng:false,
    thesis:"Разработка современной вики-энциклопедии",
    advisor:"Лукащик Елена Петровна"

  }
  return (
  <div className='flex-auto flex-col'>
      <PortfolioHeader {...header_prop} />
      <ShortNavbar/>
      <Resume/>
      <div className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4`}>
        <Auto/>
      </div>
  </div>
  )
}
