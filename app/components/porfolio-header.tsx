import Image from "next/image"
import ExportedImage from "next-image-export-optimizer";
import { baseUri } from "app/(ru)/sitemap";
export type PortfolioHeaderProps = {
    name:string,
    faculty:string,
    specialty:string,
    thesis:string,
    eng:boolean,
    advisor:string
}

export default function PortfolioHeader({name,faculty,specialty,thesis,eng,advisor}:PortfolioHeaderProps){

    return (
    <div id="header" className="flex-auto">
      <div id="first_section" className="flex flex-col md:flex-row">
		<div id="photomag" className="m-3 flex justify-center md:block">
			<ExportedImage src={`${baseUri}/images/portrait.jpg`} alt="Портрет" width={180} height={240}/>
		</div>
		<div id="headertext" className="m-3 text-center md:text-left">
			<h1 className="text-2xl md:text-3xl mb-1 font-semibold text-slate-800">{name}</h1>
			<h3 className="md:ext-l mb-1 text-slate-500">{faculty}</h3>
			<h3 className="md:text-l mb-1 text-slate-500">{specialty}</h3>

		</div>
        </div>
        <div className="my-12">
          	<h3 className="text-l md:text-xl mb-2 text-slate-500">{(eng)? 'Thesis:' : "Тема выпускной работы:"}</h3>
			<h2 className="text-2xl md:text-3xl mb-2 font-semibold text-slate-800">{thesis}</h2>
			<h3 className="text-l md:text-xl mb-2">{(eng)? 'Scentific advisor' : "Научный руководитель"}: {advisor}</h3>  
        </div>
	</div> 
    )
}