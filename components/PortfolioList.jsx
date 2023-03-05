import Project from "./Project";
import Image from "next/image";
import design_imp from "../public/design_imp.jpg";
import library_mvc from "../public/library_mvc.jpg";
import lingan from "../public/lingan.png";
import projekt_trad from "../public/projekt_trad.png";
import projekt_barr from "../public/projekt_barr.png";

const PortfolioList = () => {
  const projects = [
    {
      id: 5,
      name: "C#, Implementera design patterns",
      desc: "",
      pic: <Image src={design_imp} width={300} alt={"Miniatyrbild av konsollapplikation"} />,
      codelink: <a href="https://github.com/teros4me/Designpattern_labb1" target="_blank">Kod</a>,
      weblink: "",
      zoomlink: ""
    },
    {
      id: 4,
      name: "Webbsida i ASP.NET med MVC",
      desc: "",
      pic: <Image src={library_mvc} width={300} alt={"Miniatyrbild av webbsida"} />,
      codelink: <a href="https://github.com/teros4me/Labb4_MVC" target="_blank">Kod</a>,
      weblink: "",
      zoomlink: ""
    },
    {
      id: 3,
      name: "Lingån i Frisbo, Bjuråker, Hälsingland",
      desc: "Karta över Lingåns sträckning, en jämförelse mellan år 1856 och 2020.",
      pic: <Image src={lingan} height={300} alt={"Miniatyrbild av kartan"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/cv/lingan.png" target="_blank">Förstoring</a>
    },
    {
      id: 2,
      name: "Trädslagsfördelning i Sverige",
      desc: "Sverigekarta med pajdiagram över vilka trädslag som dominerar i Götaland, Svealand, Södra Norrland och Norra Norrland.",
      pic: <Image src={projekt_trad} height={300} alt={"Miniatyrbild av kartan"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/cv/projekt_trad.png" target="_blank">Förstoring</a>
    },
    {
      id: 1,
      name: "Barrträd i Sverige",
      desc: "Sverigekarta som visar procentandel barrträd i Sveriges län.",
      pic: <Image src={projekt_barr} height={300} alt={"Miniatyrbild av kartan"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/cv/projekt_barr.png" target="_blank">Förstoring</a>
    }
  ]
  const projectList = projects.map(project => 
  <Project key={project.id} project={project}/>
  )
  return(
    <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap">
      <div className="grid lg:grid-cols-3 gap-8">
        {projectList}
      </div>
    </div>
  )
}

export default PortfolioList;
